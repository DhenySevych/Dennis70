import { motion } from 'motion/react';
import { Ship, Truck, Package, Search, MapPin, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, WHATSAPP_BASE_URL } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-red opacity-5 skew-x-[-20deg] translate-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-brand-red px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-6">
              Full Spectrum
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold italic uppercase tracking-tighter mb-4">
              Import <span className="text-brand-red">& Logistics</span>
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-2xl italic leading-relaxed">
              We provide end-to-end import services, from international procurement and factory verification to custom clearance and final delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const LucideIcon = (Icons as any)[service.icon] || Ship;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 group transition-all h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-slate-50 text-brand-red rounded flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-all">
                    <LucideIcon size={28} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed font-light italic mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-3 pt-6 border-t border-slate-50 mt-auto">
                    {['Reliable Handling', 'Professional Support', 'Verified Sourcing'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span className="font-bold uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading-accent text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-brand-blue uppercase italic">Our Proven Process</h2>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mt-1">Transparency at every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-16 relative">
            <div className="hidden md:block absolute top-[44px] left-8 right-8 h-px bg-slate-100 -z-10"></div>
            {[
              { step: '01', title: 'Consultation', desc: 'Discussing your requirements and identifying manufacturers.' },
              { step: '02', title: 'Procurement', desc: 'Factory verification and secure ordering of products.' },
              { step: '03', title: 'Logistics', desc: 'Consolidation, shipping, and customs clearance handling.' },
              { step: '04', title: 'Delivery', desc: 'Final inspection and delivery to your warehouse or doorstep.' },
            ].map((step, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:border-brand-red group-hover:text-brand-red transition-all text-sm font-extrabold">
                  {step.step}
                </div>
                <h4 className="font-bold text-slate-800 uppercase text-sm mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs italic font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-24 bg-slate-50 text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-red mb-8 border border-slate-100 shadow-sm">
            <MessageCircle size={32} />
          </div>
          <h2 className="text-4xl font-extrabold text-brand-blue mb-6 italic uppercase tracking-tighter">Need a Custom Quote?</h2>
          <p className="text-slate-500 font-light text-lg mb-12 italic">
            Every business has unique requirements. Contact us for a personalized procurement plan that fits your budget and timeline perfectly.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="btn-primary h-14 px-10">
              Request a Quote
              <ArrowRight size={20} />
            </Link>
            <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello! I'd like to inquire about your global logistics services.")}`} className="border-2 border-green-600 text-green-500 h-14 px-10 font-bold hover:bg-green-600 hover:text-white transition-all flex items-center gap-2">
              <MessageCircle size={20} />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
