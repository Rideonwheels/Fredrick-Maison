import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { Partner } from '../types';
import { searchPartnersAI } from '../geminiService';

const Partners: React.FC = () => {
  const [query, setQuery] = useState('');
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 'p1',
      name: 'Eleanor Riggs',
      title: 'Fractional CFO',
      company: 'Riggs Financial',
      location: 'New York, NY',
      expertise: ['M&A', 'SaaS', 'Series B'],
      imageUrl: 'https://picsum.photos/100/100?random=10',
      bio: 'Helping SaaS companies navigate the jump from Series A to B with robust financial modeling.'
    },
    {
      id: 'p2',
      name: 'James Wu',
      title: 'Supply Chain Consultant',
      company: 'Global Ops',
      location: 'Chicago, IL',
      expertise: ['Logistics', 'Manufacturing', 'Cost Reduction'],
      imageUrl: 'https://picsum.photos/100/100?random=11',
      bio: 'Optimizing global supply chains for manufacturing firms with $50M+ revenue.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setLoading(true);
    const aiResults = await searchPartnersAI(query);
    
    const newPartners: Partner[] = aiResults.map((p: any, index: number) => ({
      id: `ai-${Date.now()}-${index}`,
      name: p.name,
      title: p.title,
      company: p.company,
      location: p.location,
      expertise: [query, 'Expert'],
      imageUrl: `https://picsum.photos/100/100?random=${index + 20}`,
      bio: p.bio
    }));

    setPartners(newPartners.length > 0 ? newPartners : partners);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#C5A059] uppercase tracking-[0.2em] font-bold text-xs mb-3">Community</h2>
          <h1 className="text-4xl font-serif font-bold text-[#0F172A]">Member Directory</h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light">
            Connect with fellow members and vetted partners for your business needs.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="relative flex items-center shadow-lg">
            <input
              type="text"
              className="w-full border-0 py-5 pl-8 pr-32 text-lg placeholder:text-slate-400 focus:ring-0"
              placeholder="Search by expertise, name, or industry..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-0 top-0 bottom-0 bg-[#0F172A] text-white px-8 font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-colors disabled:opacity-70 text-xs"
            >
              {loading ? 'Searching' : 'Search'}
            </button>
          </form>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trending:</span>
            {['Investment Banking', 'Legal Counsel', 'CMO', 'Real Estate'].map(tag => (
              <button 
                key={tag} 
                onClick={() => setQuery(tag)}
                className="text-xs text-[#0F172A] hover:text-[#C5A059] border-b border-transparent hover:border-[#C5A059] transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 flex flex-col h-full group">
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between">
                  <img className="h-20 w-20 rounded-full border-2 border-slate-100 object-cover p-1" src={partner.imageUrl} alt={partner.name} />
                  <span className="inline-flex items-center px-3 py-1 bg-[#f0f9ff] text-[#0F172A] text-[10px] font-bold uppercase tracking-wider">
                    Member
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-serif font-bold text-[#0F172A] group-hover:text-[#C5A059] transition-colors">{partner.name}</h3>
                  <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mt-1">{partner.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{partner.company}</p>
                </div>
                
                <p className="mt-6 text-slate-600 text-sm leading-relaxed font-light">
                  "{partner.bio}"
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {partner.expertise.slice(0, 3).map((skill, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-1 bg-[#f8f9fa] text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-8 py-5 bg-[#fafafa] border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3 h-3 mr-1" /> {partner.location}
                </div>
                <button className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#C5A059]">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;