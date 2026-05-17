import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS, WHATSAPP_LINK, CONTACT_PHONE } from '../constants';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 min-h-screen bg-gray-50/50">
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center italic">
          <p className="text-brand-red font-bold uppercase tracking-[0.2em] mb-3 text-xs italic">Support</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Find quick answers to common questions about our import services, procurement assistance, and products.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === i ? 'border-brand-red shadow-lg' : 'border-gray-100 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      activeIndex === i ? 'bg-brand-red text-white' : 'bg-gray-50 text-brand-blue'
                    }`}>
                      <HelpCircle size={20} />
                    </div>
                    <span className={`font-bold italic transition-colors ${
                      activeIndex === i ? 'text-brand-blue' : 'text-gray-700'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-300 ${activeIndex === i ? 'rotate-180 text-brand-red' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 ml-14">
                        <p className="text-gray-500 font-light leading-relaxed italic">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-brand-blue rounded-3xl text-white text-center italic relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold mb-4 italic">Still Have Questions?</h3>
            <p className="text-gray-400 mb-8 font-light">
              Don't hesitate to reach out to our team directly. We are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={WHATSAPP_LINK} className="btn-whatsapp py-2 text-sm">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 border border-white/20 transition-all text-sm">
                <Phone size={18} />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
