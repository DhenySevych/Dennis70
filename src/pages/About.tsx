import { motion } from 'motion/react';
import { Target, Eye, Heart, Globe, Users, Award, Shield, Ship, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

const values = [
  { title: 'Integrity', icon: Shield, desc: 'We maintain the highest standards of honesty and transparency in all our international dealings.' },
  { title: 'Quality', icon: Award, desc: 'Every product we import undergoes rigorous quality checks to exceed customer expectations.' },
  { title: 'Commitment', icon: Heart, desc: 'We are dedicated to building long-term relationships with both our suppliers and clients.' },
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <div className="section-heading-accent">
              <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue uppercase leading-tight italic">
                Bridging Global <br /><span className="text-brand-red">Excellence</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light italic">
              At Bellsel Imports, we specialize in sourcing and importing high quality products from trusted suppliers worldwide. With a commitment to excellence, we connect businesses with premium goods to meet their needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 text-[12px]">
              <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-slate-50 text-brand-red rounded flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="font-bold text-slate-800 uppercase tracking-tight mb-2">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">To streamline global sourcing and provide unmatched logistics reliability in the Ghanaian market.</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-slate-50 text-brand-blue rounded flex items-center justify-center mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="font-bold text-slate-800 uppercase tracking-tight mb-2">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">To be the first-choice partner for international trade, recognized for quality and integrity across West Africa.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 rounded-2xl -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
              alt="Team discussing strategy" 
              className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-red p-8 rounded-sm shadow-xl text-white z-20 hidden md:block">
              <p className="text-4xl font-extrabold mb-1 italic">100%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Reliability Rate</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold italic uppercase tracking-tighter decoration-brand-red decoration-4 underline underline-offset-8">Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Integrity', desc: 'Transparent dealings and honest communication in every single import.', icon: Shield },
              { title: 'Excellence', desc: 'Committed to sourced products that meet international standards.', icon: Award },
              { title: 'Innovation', desc: 'Utilizing modern logistics to shorten delivery timelines consistently.', icon: Zap },
              { title: 'Customer Focus', desc: 'Dedicated to our clients success and long-term satisfaction.', icon: Users },
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red transition-all">
                  <value.icon size={28} className="text-brand-red group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{value.title}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
