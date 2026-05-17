import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ShieldCheck, Star, Zap, Globe, Clock, Headphones, Mail, Send, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, WHATSAPP_BASE_URL, SERVICES, TESTIMONIALS, CONTACT_EMAIL } from '../constants';
import * as Icons from 'lucide-react';

export default function Home() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center pt-24 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Bellsel Imports Warehouse Operations" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-block bg-brand-red px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-6">
              Global Sourcing, Quality Imports
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight mb-6">
              Connecting Quality,<br />
              <span className="text-brand-red uppercase">Importing Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light max-w-lg leading-relaxed">
              At Bellsel Imports, we specialize in sourcing and importing high quality products from trusted suppliers worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary hover:bg-red-700">
                View Catalog
              </Link>
              <Link to="/services" className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 font-bold transition-all">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="section-heading-accent">
              <h2 className="text-3xl font-extrabold text-brand-blue uppercase">Featured Import Catalog</h2>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mt-1">Directly Sourced High-Quality Products</p>
            </div>
            <Link to="/products" className="text-sm font-bold text-brand-blue flex items-center gap-1 underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red transition-colors">
              Browse All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">Excellence</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mt-2 italic underline decoration-slate-100 decoration-8 underline-offset-[-2px]">Why Choose Bellsel Imports?</h2>
            <p className="text-slate-500 font-light text-lg mt-4">
              We connect businesses with premium goods to meet their needs with a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Trusted Imports', desc: 'Secure sourcing from certified manufacturers globally.', icon: ShieldCheck },
              { title: 'High Quality', desc: 'Every product is strictly inspected for performance and durability.', icon: Star },
              { title: 'International Sourcing', desc: 'Specialized routes from the China market.', icon: Globe },
              { title: 'Fast Logistics', desc: 'Efficient shipping and clearance to minimize wait times.', icon: Zap },
              { title: '24/7 Support', desc: 'Professional assistance at every stage of your order.', icon: Headphones },
              { title: 'Bulk Solutions', desc: 'Competitive wholesale pricing for business growth.', icon: Clock },
            ].map((feature, i) => (
              <div 
                key={i}
                className="p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group rounded-xl"
              >
                <div className="w-12 h-12 bg-white text-brand-red rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-blue py-16 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Products Imported', value: '500+' },
              { label: 'Happy Clients', value: '1,200+' },
              { label: 'Global Partners', value: '15+' },
              { label: 'Quality Standards', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-extrabold font-display mb-1 italic text-brand-red">{stat.value}</p>
                <p className="text-[10px] uppercase font-bold text-slate-300 tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center mb-16">
              <div className="section-heading-accent inline-block">
                <h2 className="text-4xl font-extrabold text-brand-blue uppercase">Global Logistics Solutions</h2>
              </div>
              <p className="text-slate-500 leading-relaxed font-light text-xl italic max-w-3xl mx-auto">
                Beyond just importing, we provide a full suite of services that ensure your business or home gets the best global products without the stress of logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.slice(0, 4).map((service, i) => {
                const LucideIcon = (Icons as any)[service.icon] || Zap;
                return (
                  <div key={i} className="p-6 bg-slate-50 rounded-xl space-y-4 group hover:bg-brand-blue transition-all duration-300">
                    <div className="w-12 h-12 bg-white text-brand-blue rounded-lg flex items-center justify-center shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <LucideIcon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-800 uppercase text-sm tracking-tight group-hover:text-white transition-colors">{service.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed group-hover:text-white/80 transition-colors">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Email Inquiry Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 bg-slate-900 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
               <div className="relative z-10">
                 <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">Contact Us</span>
                 <h2 className="text-4xl font-black italic uppercase tracking-tighter mt-4 mb-6">Send an <span className="text-brand-red">Email</span></h2>
                 <p className="text-slate-400 font-light mb-8 italic">
                   Prefer direct communication? Send us your requirements via email and our procurement specialists will get back to you with a detailed quote.
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-brand-red">
                       <Mail size={18} />
                     </div>
                     <span className="font-bold text-lg">{CONTACT_EMAIL}</span>
                   </div>
                   <button 
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                   >
                     {copySuccess ? (
                       <><Check size={14} className="text-green-500" /> Copied to Clipboard!</>
                     ) : (
                       <><Copy size={14} /> Copy Email Address</>
                     )}
                   </button>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2 p-12 flex items-center justify-center">
              <div className="text-center w-full max-w-sm">
                <h3 className="text-2xl font-extrabold text-brand-blue mb-4">Quick Business Inquiry</h3>
                <p className="text-slate-500 text-sm mb-8 italic font-light">Click below to draft a quick inquiry email directly to our office.</p>
                <a 
                  href={`mailto:${CONTACT_EMAIL}?subject=Business Inquiry from Website&body=Hello Bellsel Imports team,%0D%0A%0D%0AI would like to inquire about...`}
                  className="inline-flex items-center justify-center gap-3 w-full bg-brand-red text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-lg shadow-brand-red/20 active:scale-95"
                >
                  Draft Email Now
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-slate-900 py-24 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-brand-blue opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic uppercase tracking-tighter">Ready to Import the Best?</h2>
            <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto italic">
              Contact our team today for professional procurement assistance and high-quality product sourcing from China.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary hover:bg-white hover:text-brand-red">
                Inquire Now
              </Link>
              <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello! I'm interested in your imports catalog.")}`} className="border-2 border-green-600 text-green-500 px-8 py-3 font-bold hover:bg-green-600 hover:text-white transition-all flex items-center gap-2">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
