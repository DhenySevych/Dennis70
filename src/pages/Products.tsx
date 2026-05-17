import { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, Package, ArrowUpRight, Grid, List as ListIcon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const countries = ['All', ...new Set(PRODUCTS.map(p => p.importedFrom))];

  useEffect(() => {
    let result = PRODUCTS;

    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedCountry !== 'All') {
      result = result.filter(p => p.importedFrom === selectedCountry);
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedCountry]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white border-b border-white/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red opacity-5 skew-x-[-15deg] translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-brand-red px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-6">
              Global Sourcing
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold italic uppercase tracking-tighter mb-4">
              Import <span className="text-brand-red">Catalog</span>
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-2xl italic leading-relaxed">
              Explore our curated selection of high-quality home appliances and electronics directly imported from China.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Toolbar */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col xl:flex-row gap-6 items-center justify-between mb-12">
          <div className="relative w-full xl:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search catalog..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap w-full md:w-auto items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category:</span>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer pr-2"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Source:</span>
              <select 
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer pr-2"
              >
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Showing <span className="text-brand-blue">{filteredProducts.length}</span> Premium Products
          </p>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight italic">Product not found</h3>
            <p className="text-slate-500 text-sm mt-2 font-light italic">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>

      {/* Request Sourcing CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-sm p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
            <div className="absolute top-0 right-0 w-64 h-full bg-brand-red opacity-10 -skew-x-[20deg] translate-x-32 group-hover:translate-x-20 transition-transform"></div>
            
            <div className="max-w-xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase italic tracking-tighter">Can't Discover What You Need?</h3>
              <p className="text-slate-300 font-light italic">
                Our procurement experts specialize in finding hard-to-source international goods tailored to your exact needs. Tell us what you're looking for.
              </p>
            </div>

            <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-slate-100 relative z-10 whitespace-nowrap px-10">
              Request Sourcing
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
