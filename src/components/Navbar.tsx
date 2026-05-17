import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_BASE_URL } from '../constants';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-blue rounded-lg shadow-sm flex items-center justify-center text-white overflow-hidden relative border-2 border-brand-red transition-transform group-hover:scale-105">
                <Globe size={24} className="relative z-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-red opacity-80"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg leading-tight text-brand-blue uppercase tracking-tight group-hover:text-brand-red transition-colors">
                  BELLSEL
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 leading-none">
                  Imports
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold tracking-tight transition-all hover:text-brand-red relative py-1 ${
                    location.pathname === link.path 
                      ? 'text-brand-blue border-b-2 border-brand-blue' 
                      : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello! I'd like to inquire about Bellsel Imports.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-blue p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 text-base font-bold border-b border-slate-50 ${
                      location.pathname === link.path ? 'text-brand-red' : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <a 
                    href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello! I'd like to inquire about Bellsel Imports.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center py-3 text-sm rounded-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
