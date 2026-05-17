import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle, ArrowRight, Copy, Check } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_LINK, CONTACT_EMAIL } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3 opacity-90">
            <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center font-extrabold text-white text-sm border border-brand-red">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight">Bellsel Imports</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">© {currentYear} All Rights Reserved</span>
            </div>
          </div>

          {/* Pillars */}
          <div className="hidden lg:flex gap-8 text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500">
            <span className="hover:text-brand-red cursor-default transition-colors">Quality</span>
            <span className="hover:text-brand-red cursor-default transition-colors">Reliability</span>
            <span className="hover:text-brand-red cursor-default transition-colors">Global Excellence</span>
          </div>

          {/* Contact Snip */}
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div className="flex flex-col gap-1 text-right">
              <span className="uppercase text-[9px] font-bold text-slate-500">Direct Contact</span>
              <div className="flex flex-col">
                <span className="text-white font-bold">{CONTACT_PHONE}</span>
                <button 
                  onClick={handleCopyEmail}
                  className="text-slate-500 font-medium text-[10px] -mt-1 hover:text-brand-red transition-colors flex items-center justify-end gap-1"
                >
                  {CONTACT_EMAIL}
                  {copySuccess ? <Check size={10} className="text-green-500" /> : <Copy size={10} />}
                </button>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden md:block"></div>
            <div className="flex flex-col gap-1 text-left">
              <span className="uppercase text-[9px] font-bold text-slate-500">Global Hubs</span>
              <span className="text-white font-bold italic">China</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
