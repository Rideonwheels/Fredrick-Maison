import React from 'react';
import { FileText, Download, Star, Filter } from 'lucide-react';
import { Resource } from '../types';

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 'r1',
      title: 'Series A Pitch Deck',
      category: 'Fundraising',
      description: 'The standard 15-slide deck structure used by top-tier VCs to evaluate early-growth startups.',
      downloadCount: 1240,
      format: 'PPTX'
    },
    {
      id: 'r2',
      title: 'SaaS Financial Model',
      category: 'Finance',
      description: 'Comprehensive Excel model including MRR waterfall, cohort analysis, and headcount planning.',
      downloadCount: 890,
      format: 'XLSX'
    },
    {
      id: 'r3',
      title: 'Executive Employment Agreement',
      category: 'Legal',
      description: 'Standard template for C-level hires including IP assignment, vesting schedules, and severance terms.',
      downloadCount: 550,
      format: 'DOCX'
    },
    {
      id: 'r4',
      title: 'QBR Presentation Framework',
      category: 'Operations',
      description: 'A structured guide for running effective Quarterly Business Reviews with your leadership team.',
      downloadCount: 720,
      format: 'PPTX'
    },
     {
      id: 'r5',
      title: 'Marketing Budget Allocation',
      category: 'Marketing',
      description: 'Calculator to optimize ad spend across channels based on CAC and LTV targets.',
      downloadCount: 430,
      format: 'XLSX'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-[#C5A059] uppercase tracking-[0.2em] font-bold text-xs mb-3">Knowledge Base</h2>
            <h1 className="text-4xl font-serif font-bold text-[#0F172A]">Resource Library</h1>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
             <button className="flex items-center px-6 py-3 bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:bg-slate-50 hover:border-[#C5A059] transition-all">
               <Filter className="w-4 h-4 mr-2" /> Filter
             </button>
             <button className="flex items-center px-6 py-3 bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-colors">
               Suggest Resource
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white p-8 border border-slate-100 flex flex-col hover:border-[#C5A059] hover:shadow-xl transition-all group duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-[#f8f9fa] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#C5A059] transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex items-center text-[#C5A059] text-xs font-bold">
                  <Star className="w-4 h-4 fill-current mr-1" /> 4.9
                </div>
              </div>
              
              <h3 className="text-xl font-bold font-serif text-[#0F172A] mb-2">{resource.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">
                {resource.category}
              </span>
              
              <p className="text-slate-600 text-sm mb-8 flex-1 font-light leading-relaxed">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {resource.format} • {resource.downloadCount} Downloads
                </span>
                <button className="flex items-center text-[#0F172A] text-xs font-bold uppercase tracking-wider hover:text-[#C5A059] transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;