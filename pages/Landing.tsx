import React from 'react';
import { ArrowRight, Star, Users, GlassWater, Calendar, Briefcase, MapPin, Check } from 'lucide-react';

interface LandingProps {
  onJoin: () => void;
  onLogin: () => void;
  onNavigate: (page: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onJoin, onLogin, onNavigate }) => {
  return (
    <div className="bg-white font-sans text-[#0F172A]">
      
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1576089235406-8ade99ec7657?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            alt="Club Lounge Skyline"
          />
          <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-[#0F172A]/30"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-[#C5A059] uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6 animate-fade-in-up">
              Welcome to The Executive
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Elevate Your Business <br/> & Social Life
            </h1>
            <p className="text-xl text-slate-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              The premier private club for leaders, innovators, and visionaries to connect, dine, and grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={onJoin}
                className="bg-[#C5A059] text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#b08d4b] transition-all duration-300"
              >
                Inquire Now
              </button>
              <button 
                 onClick={onLogin} 
                 className="bg-transparent border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0F172A] transition-all duration-300"
              >
                Member Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section - Text Left, Image Right */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="w-16 h-1 bg-[#C5A059] mb-8"></div>
              <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6">
                A Tradition of Excellence
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-light">
                At The Executive, we believe that the environment you surround yourself with shapes your success. Our club offers a sophisticated setting for conducting business, hosting clients, or simply unwinding after a demanding day.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                Located at the pinnacle of the city, our members enjoy breathtaking views, world-class cuisine, and a calendar of exclusive events designed to foster meaningful connections.
              </p>
              <button onClick={() => onNavigate('governance')} className="text-[#C5A059] font-bold uppercase tracking-[0.15em] text-xs hover:text-[#0F172A] transition-colors flex items-center">
                Our History & Governance <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full border border-[#C5A059] z-0 hidden md:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Executive Tradition" 
                className="relative z-10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Club Life Grid */}
      <div className="bg-[#f8f9fa] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#C5A059] font-bold uppercase tracking-[0.2em] text-xs mb-3">Experience</h3>
            <h2 className="text-4xl font-serif font-bold text-[#0F172A]">The Club Life</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group relative overflow-hidden h-[400px] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Fine Dining" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <GlassWater className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Fine Dining</h3>
                <p className="text-slate-300 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Culinary excellence featuring seasonal menus and an extensive wine cellar.
                </p>
                <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#C5A059] pb-1">Explore Menu</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative overflow-hidden h-[400px] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Networking" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <Users className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Networking</h3>
                <p className="text-slate-300 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Connect with industry leaders through curated mixers and speaker series.
                </p>
                <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#C5A059] pb-1">View Calendar</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative overflow-hidden h-[400px] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="Workspace" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <Briefcase className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Workspace</h3>
                <p className="text-slate-300 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Private boardrooms and co-working spaces designed for productivity.
                </p>
                <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-[#C5A059] pb-1">Book a Room</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Break */}
      <div className="py-24 bg-[#0F172A] text-center px-4 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
           <Star className="w-12 h-12 text-[#C5A059] mx-auto mb-8" />
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-white italic leading-tight mb-8">
             "The Executive is not just a club; it is the ultimate connection engine for the city's business elite."
           </h2>
           <p className="text-[#C5A059] font-bold uppercase tracking-[0.15em] text-sm">Fredrick Maison, Founding Member</p>
        </div>
      </div>

      {/* Membership Categories */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-4">Membership Categories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              Designed to fit your professional and personal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="border border-slate-100 p-8 text-center hover:border-[#C5A059] transition-all hover:shadow-xl group">
               <h3 className="text-xl font-bold text-[#0F172A] uppercase tracking-wider mb-2">Resident</h3>
               <p className="text-sm text-slate-500 mb-6">For established local executives</p>
               <div className="text-[#C5A059] mb-6 flex justify-center"><Star className="w-6 h-6" /></div>
               <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Full access to all dining & amenities</li>
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Priority reservations</li>
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Spouse/Partner privileges included</li>
               </ul>
               <button onClick={onJoin} className="w-full py-3 border border-[#0F172A] text-[#0F172A] font-bold uppercase tracking-wider text-xs hover:bg-[#0F172A] hover:text-white transition-colors">Inquire</button>
             </div>

             <div className="border border-slate-100 p-8 text-center hover:border-[#C5A059] transition-all hover:shadow-xl group bg-[#0F172A] transform md:-translate-y-4">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">Most Popular</div>
               <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2 mt-4">Corporate</h3>
               <p className="text-sm text-slate-300 mb-6">For companies with 3+ members</p>
               <div className="text-[#C5A059] mb-6 flex justify-center"><Briefcase className="w-6 h-6" /></div>
               <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Transferable memberships</li>
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Complimentary meeting room credits</li>
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Brand exposure opportunities</li>
               </ul>
               <button onClick={onJoin} className="w-full py-3 bg-[#C5A059] text-white font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-[#0F172A] transition-colors">Inquire</button>
             </div>

             <div className="border border-slate-100 p-8 text-center hover:border-[#C5A059] transition-all hover:shadow-xl group">
               <h3 className="text-xl font-bold text-[#0F172A] uppercase tracking-wider mb-2">Young Executive</h3>
               <p className="text-sm text-slate-500 mb-6">For leaders under 40</p>
               <div className="text-[#C5A059] mb-6 flex justify-center"><Calendar className="w-6 h-6" /></div>
               <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Reduced initiation fee</li>
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Mentorship program access</li>
                 <li className="flex items-start"><Check className="w-4 h-4 text-[#C5A059] mr-2 mt-0.5" /> Exclusive social mixers</li>
               </ul>
               <button onClick={onJoin} className="w-full py-3 border border-[#0F172A] text-[#0F172A] font-bold uppercase tracking-wider text-xs hover:bg-[#0F172A] hover:text-white transition-colors">Inquire</button>
             </div>
          </div>
        </div>
      </div>

      {/* Request Info / Contact Form */}
      <div className="bg-[#f2f2f2] py-24" id="inquire">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-4">Request Information</h2>
             <p className="text-slate-600 font-light">
               Interested in membership? Please complete the form below and our Membership Director will contact you shortly.
             </p>
           </div>
           
           <form className="bg-white p-8 md:p-12 shadow-lg border-t-4 border-[#C5A059]">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                 <input type="text" className="w-full border-slate-300 p-3 focus:ring-[#C5A059] focus:border-[#C5A059] border" />
               </div>
               <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                 <input type="text" className="w-full border-slate-300 p-3 focus:ring-[#C5A059] focus:border-[#C5A059] border" />
               </div>
             </div>
             <div className="mb-6">
               <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
               <input type="email" className="w-full border-slate-300 p-3 focus:ring-[#C5A059] focus:border-[#C5A059] border" />
             </div>
             <div className="mb-6">
               <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
               <input type="tel" className="w-full border-slate-300 p-3 focus:ring-[#C5A059] focus:border-[#C5A059] border" />
             </div>
             <div className="mb-8">
               <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Comments / Questions</label>
               <textarea rows={4} className="w-full border-slate-300 p-3 focus:ring-[#C5A059] focus:border-[#C5A059] border"></textarea>
             </div>
             <div className="text-center">
               <button type="button" onClick={() => alert("Thank you for your inquiry. Our Membership Director will contact you soon.")} className="bg-[#0F172A] text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#C5A059] transition-colors">
                 Submit Inquiry
               </button>
             </div>
           </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex items-center mb-8">
             <Star className="text-[#C5A059] w-6 h-6 mr-2" />
             <span className="font-serif font-bold text-2xl tracking-tight">THE EXECUTIVE</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Membership</a>
            <a href="#" className="hover:text-white transition-colors">Private Events</a>
            <a href="#" className="hover:text-white transition-colors">Dining</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex space-x-6 mb-12">
            <div className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors cursor-pointer">
              <span className="text-lg">in</span>
            </div>
            <div className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors cursor-pointer">
              <span className="text-lg">f</span>
            </div>
            <div className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors cursor-pointer">
              <span className="text-lg">ig</span>
            </div>
          </div>

          <p className="text-slate-500 text-xs">
            &copy; 2024 The Executive. All Rights Reserved. | <a href="#" onClick={() => onNavigate('governance')} className="hover:text-white">Governance</a> | Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;