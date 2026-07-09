"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Menu, X, ChevronLeft, Search } from 'lucide-react';
import logoImg from '../../../public/Logos/logo-green-va.png';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full bg-white z-50 shadow-sm">
        {/* 1. Utility Bar (Desktop Only) */}
        <div className="hidden md:block bg-[#F8F9FA] border-b border-slate-100 py-2 px-[5%]">
          <div className="max-w-[1400px] mx-auto flex justify-end items-center gap-6 text-sm">
            <Link href="/faq" className="flex items-center gap-2 text-slate-500 hover:text-enterprise-navy transition-colors text-xs font-bold uppercase tracking-wider">
              FAQ
            </Link>
            <Link
              href="/quote"
              className="bg-accent-green text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-enterprise-navy transition-colors"
            >
              Get a Quote
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-slate-500 hover:text-enterprise-navy transition-colors text-sm font-medium">
              <Mail size={18} className="text-accent-green" /> Contact Us
            </Link>
            <a
              href="tel:804-240-1950"
              className="flex items-center gap-2 border border-accent-green text-accent-green px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-accent-green hover:text-white transition-colors"
            >
              <Phone size={16} /> 804-240-1950
            </a>
          </div>
        </div>

        {/* 2. Main Navbar */}
        <nav className="border-b border-border-color bg-white relative h-[80px] md:h-auto md:min-h-[60px]">
          <div className="max-w-[1600px] mx-auto flex justify-between items-stretch h-full pl-4 md:pl-8">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 z-10 py-1 md:py-0">
              <Image
                src={logoImg}
                alt="Smith Landscaping Logo"
                className="h-14 md:h-[80px] w-auto object-contain md:-my-6"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 pl-12 pr-8 font-extrabold text-[13px] tracking-[0.15em] text-enterprise-navy uppercase">
              <Link href="/services" className="hover:text-accent-green transition-colors py-8">Services</Link>
              <Link href="/about" className="hover:text-accent-green transition-colors py-8">About Us</Link>
              <Link href="/resources" className="hover:text-accent-green transition-colors py-8">Resources</Link>
              <Link href="/portfolio" className="hover:text-accent-green transition-colors py-8">Portfolio</Link>
            </div>

            {/* Desktop Search Icon */}
            <div className="hidden md:flex items-center border-l border-slate-200 pl-8 pr-4 relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-enterprise-navy hover:text-accent-green transition-colors" 
                aria-label="Toggle Search"
              >
                <Search size={22} strokeWidth={2} />
              </button>
              
              {/* Dropdown Search Bar */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-6 bg-white shadow-xl border border-slate-100 p-6 w-80 rounded-sm">
                   <form action="/resources" method="GET" className="flex items-center gap-3">
                     <input 
                       type="text" 
                       name="q" 
                       placeholder="Search resources..." 
                       className="w-full border-b-2 border-slate-200 focus:border-accent-green outline-none py-2 text-[15px] text-enterprise-navy font-medium placeholder:text-slate-400 placeholder:font-light transition-colors" 
                       autoFocus 
                     />
                     <button type="submit" className="bg-accent-green text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-enterprise-navy transition-colors">
                       Search
                     </button>
                   </form>
                </div>
              )}
            </div>

            {/* Mobile Right Action Area */}
            <div className="flex md:hidden h-full items-stretch">
              <button
                className="bg-accent-green text-white flex items-center justify-center w-[80px] h-[80px] m-0 p-0"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-Out Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-Out Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Drawer Header */}
        <div className="bg-accent-green min-h-[80px] flex justify-end items-center px-5 flex-shrink-0">
          <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Links Area */}
        <div className="flex-grow overflow-y-auto">
          <ul className="flex flex-col">
            {[
              { label: 'SERVICES', href: '/services' },
              { label: 'ABOUT US', href: '/about' },
              { label: 'RESOURCES', href: '/resources' },
              { label: 'PORTFOLIO', href: '/portfolio' },
              { label: 'FAQ', href: '/faq' },
              { label: 'CONTACT', href: '/contact' },
            ].map(item => (
              <li key={item.label} className="border-b border-slate-100">
                <Link
                  href={item.href}
                  className="flex justify-between items-center px-6 py-5 text-[13px] font-extrabold tracking-widest text-slate-500 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Blocks */}
          <div className="px-6 py-6 border-b border-slate-100 text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">
            CALL US: <a href="tel:804-240-1950" className="text-accent-green underline ml-1">804-240-1950</a>
          </div>
          <Link 
            href="/quote" 
            className="block bg-accent-green text-white text-center px-6 py-5 text-[13px] font-extrabold tracking-widest uppercase hover:bg-enterprise-navy transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GET A QUOTE
          </Link>
        </div>
      </div>

      {/* Non-Sticky Footer Elements */}
      <div className="w-full bg-white relative z-40">
        {/* Green Alert Bar */}
        <div className="hidden md:flex bg-accent-green text-white py-3 px-[5%] justify-center items-center">
          <span className="italic font-light text-sm md:text-[15px] tracking-wide">Landscaping you are satisfied with every step of the way.</span>
        </div>
      </div>
    </>
  );
}
