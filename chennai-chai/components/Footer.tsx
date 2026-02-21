import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A0A00] text-[#FDF6EC]/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#5C3317]/40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M8 14 Q10 8 16 8 Q22 8 24 14 L22 24 Q20 26 16 26 Q12 26 10 24 Z" stroke="#FF6F00" strokeWidth="1.5" fill="none"/>
                <path d="M24 16 Q28 14 28 18 Q28 22 24 20" stroke="#FF6F00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M12 8 Q13 4 14 5" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 7 Q17 3 18 4" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="font-display text-xl font-bold text-[#FDF6EC]">Chennai Chai</span>
            </div>
            <p className="text-sm text-[#FDF6EC]/60 font-tamil">சென்னை சாய்</p>
            <p className="text-sm mt-2 text-[#FF6F00]/80 italic font-display">Brewed in Chennai. Poured in Chicago.</p>
            <p className="text-xs mt-4 text-[#FDF6EC]/50">Illinois Institute of Technology, Chicago</p>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDF6EC] mb-4 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'], ['/menu', 'Menu'], ['/story', 'Our Story'], ['/order', 'Order Now'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#FF6F00] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDF6EC] mb-4 tracking-wide uppercase text-xs">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 border border-[#5C3317] rounded-full hover:border-[#FF6F00] hover:text-[#FF6F00] transition-all"
                aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer"
                className="p-2 border border-[#5C3317] rounded-full hover:border-[#FF6F00] hover:text-[#FF6F00] transition-all"
                aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
            <div className="text-xs text-[#FDF6EC]/50 space-y-1">
              <p>Mon – Fri: 8AM – 6PM CST</p>
              <p>Sat – Sun: 10AM – 4PM CST</p>
              <p className="mt-2">Student Center Booth, IIT Chicago</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FDF6EC]/40">
          <p>Made with ♥ by IIT Chicago Students</p>
          <p>© 2026 Chennai Chai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
