import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import logoImg from '../../../public/Smith Landscaping Virginia Logo.png';

export default function Footer() {
  return (
    <footer className="bg-white text-enterprise-navy py-8 px-[5%] border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo & Social */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src={logoImg} alt="Smith Landscaping Logo" className="h-10 w-auto" />
          </Link>
          <a 
            href="https://www.instagram.com/smithlandscaping.va/" 
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-accent-green hover:text-enterprise-navy transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
        </div>

        {/* Center: Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
          <Link href="/privacy" className="hover:text-enterprise-navy transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-enterprise-navy transition-colors">Terms of Service</Link>
          <span>|</span>
          <Link href="/faq" className="hover:text-enterprise-navy transition-colors">FAQ</Link>
          <span>|</span>
          <p>&copy; {new Date().getFullYear()} Smith Landscaping</p>
        </div>

        {/* Right: Viracis Attribution */}
        <div className="text-xs text-slate-500 font-medium text-center md:text-right">
          Designed and Maintained by <a href="https://viracis.com" target="_blank" rel="noopener noreferrer" className="text-accent-green font-bold hover:text-enterprise-navy transition-colors">Viracis</a>
        </div>
        
      </div>
    </footer>
  );
}
