import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_BASE_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello! I'm visiting your website and have a question.")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[99] bg-brand-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-green border-2 border-white"></span>
      </span>
    </motion.a>
  );
}
