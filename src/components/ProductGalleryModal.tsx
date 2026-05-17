import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, WHATSAPP_BASE_URL, CONTACT_EMAIL } from '../constants';

interface ProductGalleryModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductGalleryModal({ product, onClose }: ProductGalleryModalProps) {
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const whatsappProductLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hello, I'm interested in the ${product.name} (GH₵ ${product.price}).`)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] md:h-auto overflow-y-auto md:overflow-visible shadow-2xl flex flex-col md:flex-row relative scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - More prominent for mobile */}
          <button
            onClick={onClose}
            className="fixed md:absolute top-6 right-6 z-[60] p-3 bg-white/90 md:bg-white/10 hover:bg-white text-slate-900 md:text-white md:hover:text-slate-600 rounded-full transition-all shadow-lg md:shadow-none border border-slate-200 md:border-none"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* Gallery Section */}
          <div className="w-full md:w-2/3 bg-slate-900 relative flex flex-col shrink-0">
            <div className="flex-grow flex items-center justify-center p-4 min-h-[40vh] md:min-h-[600px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={images[activeIndex]}
                  alt={`${product.name} - ${activeIndex + 1}`}
                  className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="p-4 bg-black/20 flex gap-2 overflow-x-auto justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === activeIndex ? 'border-brand-red' : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/3 p-8 flex flex-col bg-white">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 leading-tight">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-black text-brand-blue">
                  GH₵ {product.price.toLocaleString()}
                </span>
                <span className="text-slate-400 text-xs font-medium bg-slate-50 px-2 py-1 rounded">
                  Origin: {product.importedFrom}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
                {product.availability} Now
              </span>
              <span className="text-red-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-red-50 rounded-full border border-red-100">
                New Arrival
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              {product.description}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                Direct from factory in {product.importedFrom}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                Pre-shipment quality inspection
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
                Wholesale & retail orders accepted
              </li>
            </ul>

            <div className="mt-auto space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Quote Request: ${product.name}&body=Hello Bellsel Imports team,%0D%0A%0D%0AI would like to request a quote for the ${product.name} (ID: ${product.id}).`}
                className="flex items-center justify-center gap-2 w-full bg-[#C51D2D] text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg active:scale-95 text-center"
              >
                Request a Quote
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue flex items-center justify-center gap-2 transition-colors"
              >
                {copySuccess ? <><Check size={12} className="text-green-500" /> Email Copied</> : <><Copy size={12} /> Copy Email Address</>}
              </button>
              <a
                href={whatsappProductLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-700 py-4 rounded-xl font-bold hover:bg-green-50 transition-all active:scale-95"
              >
                <div className="w-5 h-5 flex items-center justify-center bg-green-600 rounded-full">
                  <MessageCircle size={12} className="text-white fill-white" />
                </div>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
