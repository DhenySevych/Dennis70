import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Twitter, Copy, Check } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_LINK, CONTACT_EMAIL } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Product Information',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry: ${formData.type} from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 py-16 text-white overflow-hidden relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-red opacity-5 -skew-x-[20deg] translate-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-brand-red px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-6">
              Connect
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold italic uppercase tracking-tighter mb-4">
              Get In <span className="text-brand-red">Touch</span>
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-2xl italic leading-relaxed">
              Have questions about an import or need procurement assistance? Our team is ready to help you navigate global trade. 
              Email us directly at <span className="text-white font-bold">{CONTACT_EMAIL}</span>
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="section-heading-accent text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-brand-blue uppercase italic">Contact Details</h2>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: 'Call Support', value: CONTACT_PHONE, sub: 'Available Mon-Fri, 08:00-17:00' },
                { icon: Mail, title: 'Email Inquiries', value: CONTACT_EMAIL, sub: 'Direct response within 24 hours' },
                { icon: MapPin, title: 'Our Location', value: 'Accra, Ghana', sub: 'Regional Logistics Center' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 uppercase text-xs tracking-[0.2em] mb-1">{item.title}</h3>
                    {item.icon === Mail ? (
                      <div className="flex flex-col gap-2">
                        <a href={`mailto:${item.value}`} className="text-xl font-extrabold text-brand-blue hover:text-brand-red transition-colors">{item.value}</a>
                        <button 
                          onClick={handleCopyEmail}
                          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors w-fit"
                        >
                          {copySuccess ? (
                            <><Check size={12} className="text-green-500" /> Copied!</>
                          ) : (
                            <><Copy size={12} /> Copy Address</>
                          )}
                        </button>
                      </div>
                    ) : (
                      <p className="text-xl font-extrabold text-brand-blue">{item.value}</p>
                    )}
                    <p className="text-slate-500 text-xs mt-1 italic font-light">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="font-bold text-slate-800 uppercase text-xs tracking-[0.2em] mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Social, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-slate-200 rounded flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white hover:border-transparent transition-all">
                    <Social size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 pl-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 pl-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 pl-1">Inquiry Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 appearance-none bg-[url('https://www.svgrepo.com/show/444733/chevron-down.svg')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat cursor-pointer"
                >
                  <option>Product Information</option>
                  <option>Procurement Assistance</option>
                  <option>Logistics & Shipping</option>
                  <option>Wholesale/Bulk Order</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 pl-1">Your Message</label>
                <textarea 
                  required
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 resize-none"
                  placeholder="How can we help with your import needs?"
                ></textarea>
              </div>

              <div className="pt-4">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-100 flex items-center gap-3"
                  >
                    <MessageCircle size={20} />
                    <span className="font-bold text-sm italic tracking-tight">Email draft prepared! Please check your mail client to send the inquiry.</span>
                  </motion.div>
                ) : (
                  <button 
                    type="submit" 
                    className="btn-primary w-full h-14 justify-center uppercase tracking-widest text-xs"
                  >
                    Send Direct Email
                    <Send size={16} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="aspect-[21/9] bg-slate-50 relative overflow-hidden flex items-center justify-center group border border-slate-100">
              <div className="absolute inset-0 grayscale opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 text-center max-w-sm px-6">
                <MapPin size={40} className="text-brand-red mx-auto mb-6" />
                <h4 className="font-extrabold text-brand-blue text-2xl uppercase italic mb-2">Visit Our Center</h4>
                <p className="text-slate-500 font-light text-sm italic mb-8">Accra Central Business District, Regional Logistics Center, Ghana</p>
                <a href="#" className="inline-block border-2 border-brand-blue text-brand-blue px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-brand-blue hover:text-white transition-all">
                  Get Directions
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
