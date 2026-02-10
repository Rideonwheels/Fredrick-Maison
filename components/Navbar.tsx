import React from 'react';
import { ShieldCheck, Menu, X, LogOut } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Theme: Midnight Navy (#0F172A) & Champagne Gold (#C5A059)

  const navItemClass = (page: string) => 
    `cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
      currentPage === page 
        ? 'text-[#C5A059]' 
        : 'text-[#0F172A] hover:text-[#C5A059]'
    }`;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('landing')}>
            <div className="flex-shrink-0 flex items-center text-[#0F172A]">
              <ShieldCheck className="h-10 w-10 mr-3 text-[#C5A059]" />
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-2xl leading-none tracking-tight group-hover:text-[#C5A059] transition-colors">THE EXECUTIVE</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium mt-1">Private Club & Community</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            {isLoggedIn && (
              <div className="hidden md:ml-16 md:flex md:space-x-4">
                <button onClick={() => onNavigate('feed')} className={navItemClass('feed')}>
                   Club Life
                </button>
                <button onClick={() => onNavigate('partners')} className={navItemClass('partners')}>
                   Directory
                </button>
                <button onClick={() => onNavigate('resources')} className={navItemClass('resources')}>
                   Library
                </button>
              </div>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center h-full">
            {isLoggedIn ? (
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3 text-right">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0F172A] leading-none">Fredrick Maison</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059] mt-1">Founding Member</span>
                  </div>
                  <img 
                    className="h-10 w-10 rounded-full border-2 border-[#C5A059] object-cover p-0.5" 
                    src="https://picsum.photos/100/100" 
                    alt="User" 
                  />
                </div>
                <button 
                  onClick={onLogout}
                  className="text-slate-400 hover:text-[#C5A059] transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-8 h-full">
                 <button 
                  onClick={() => onNavigate('governance')}
                  className="text-[#0F172A] hover:text-[#C5A059] text-xs font-bold uppercase tracking-[0.15em] transition-colors"
                >
                  Governance
                </button>
                <button 
                  onClick={() => onNavigate('login')}
                  className="text-[#0F172A] hover:text-[#C5A059] text-xs font-bold uppercase tracking-[0.15em] transition-colors"
                >
                  Member Login
                </button>
                <button 
                  onClick={() => onNavigate('landing')}
                  className="bg-[#0F172A] text-white px-8 h-12 flex items-center text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#C5A059] transition-all duration-300"
                >
                  Inquire
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-[#0F172A] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-6 py-6 space-y-2">
            {isLoggedIn ? (
              <>
                <button onClick={() => { onNavigate('feed'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-3 border-b border-slate-50 text-sm font-bold text-[#0F172A] uppercase tracking-wider">Club Life</button>
                <button onClick={() => { onNavigate('partners'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-3 border-b border-slate-50 text-sm font-bold text-[#0F172A] uppercase tracking-wider">Directory</button>
                <button onClick={() => { onNavigate('resources'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-3 border-b border-slate-50 text-sm font-bold text-[#0F172A] uppercase tracking-wider">Library</button>
                <button onClick={() => { onLogout(); setIsMobileMenuOpen(false); }} className="block w-full text-left py-3 text-sm font-bold text-[#C5A059] uppercase tracking-wider">Sign Out</button>
              </>
            ) : (
              <>
                <button onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-3 border-b border-slate-50 text-sm font-bold text-[#0F172A] uppercase tracking-wider">Member Login</button>
                <button onClick={() => { onNavigate('landing'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-3 text-sm font-bold text-[#C5A059] uppercase tracking-wider">Inquire Membership</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;