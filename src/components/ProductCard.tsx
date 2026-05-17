import React, { useState } from 'react';
import { MessageCircle, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, WHATSAPP_BASE_URL } from '../constants';
import ProductGalleryModal from './ProductGalleryModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const whatsappProductLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hello, I'm interested in the ${product.name} (GH₵ ${product.price}).`)}`;

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card flex flex-col group h-full cursor-pointer"
        onClick={() => setShowGallery(true)}
      >
        {/* Image Section */}
        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden p-4">
          <div className="w-full h-full bg-slate-200 rounded-lg overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                <Search size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[#C51D2D] text-[10px] font-bold uppercase tracking-widest">
                {product.category}
              </p>
              <p className="text-brand-blue font-black text-sm">
                GH₵ {product.price.toLocaleString()}
              </p>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800 leading-tight">
              {product.name}
            </h3>
          </div>

          <p className="text-slate-500 text-xs mb-6 flex-grow leading-relaxed line-clamp-2">
            {product.description}
          </p>

          <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowGallery(true)}
              className="flex-1 bg-brand-blue text-white py-2.5 rounded text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm active:scale-95"
            >
              View Gallery
            </button>
            <a
              href={whatsappProductLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-10 flex items-center justify-center border border-green-500 text-green-500 rounded hover:bg-green-50 transition-colors active:scale-95"
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      {showGallery && (
        <ProductGalleryModal 
          product={product} 
          onClose={() => setShowGallery(false)} 
        />
      )}
    </>
  );
}
