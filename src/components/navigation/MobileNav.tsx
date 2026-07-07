"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Menu, X, ChevronLeft, Search } from 'lucide-react';
import logoImg from '../../../public/Smith Landscaping Virginia Logo.png';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

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
              href="#quote"
              className="bg-accent-green text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-enterprise-navy transition-colors"
            >
              Get a Quote
            </Link>
            <Link href="#contact" className="flex items-center gap-2 text-slate-500 hover:text-enterprise-navy transition-colors">
              <Mail size={16} className="text-accent-green" /> Contact Us
            </Link>
            <a
              href="tel:804-240-1950"
              className="flex items-center gap-2 border border-accent-green text-accent-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-accent-green hover:text-white transition-colors"
            >
              <Phone size={14} /> 804-240-1950
            </a>
          </div>
        </div>

        {/* 2. Main Navbar */}
        <nav className="border-b border-border-color bg-white relative h-[60px] md:h-auto md:min-h-[60px]">
          <div className="max-w-[1600px] mx-auto flex justify-between items-stretch h-full pl-4 md:pl-8">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 z-10 py-1 md:py-0">
              <Image
                src={logoImg}
                alt="Smith Landscaping Logo"
                className="h-10 md:h-[80px] w-auto object-contain md:-my-6"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 pl-12 pr-8 font-extrabold text-[13px] tracking-[0.15em] text-enterprise-navy uppercase">
              <Link href="/services" className="hover:text-accent-green transition-colors py-8">Services</Link>
              <Link href="/company" className="hover:text-accent-green transition-colors py-8">Company</Link>
              <Link href="/markets" className="hover:text-accent-green transition-colors py-8">Markets</Link>
              <Link href="/resources" className="hover:text-accent-green transition-colors py-8">Resources</Link>
              <Link href="/portfolio" className="hover:text-accent-green transition-colors py-8">Portfolio</Link>
            </div>

            {/* Desktop Search Icon */}
            <div className="hidden md:flex items-center border-l border-slate-200 pl-8 pr-4">
              <button className="text-enterprise-navy hover:text-accent-green transition-colors" aria-label="Search">
                <Search size={22} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile Right Action Area */}
            <div className="flex md:hidden h-full items-stretch">
              <button
                className="bg-accent-green text-white flex items-center justify-center w-[60px] h-[60px] m-0 p-0"
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
        <div className="bg-accent-green min-h-[60px] flex justify-end items-center px-5 flex-shrink-0">
          <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Links Area */}
        <div className="flex-grow overflow-y-auto">
          <ul className="flex flex-col">
            {[
              { label: 'SERVICES', href: '/services' },
              { label: 'COMPANY', href: '/company' },
              { label: 'MARKETS', href: '/markets' },
              { label: 'RESOURCES', href: '/resources' },
              { label: 'PORTFOLIO', href: '/portfolio' },
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
            href="#quote" 
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
          <span className="italic font-light text-sm md:text-[15px] tracking-wide">Great Service. Beautiful Landscapes.</span>
        </div>

        {/* Newsletter Signup Bar */}
        <div className="bg-white border-b border-border-color py-2.5 px-4 md:py-4 md:px-[5%]">
          <div className="max-w-[1400px] mx-auto flex flex-row justify-between md:justify-center items-center gap-2 md:gap-6">
            <span className="text-[12px] md:text-[17px] text-slate-500 font-light truncate">Get Smith Landscaping in your inbox!</span>
            <Link href="/signup" className="border-[2px] border-accent-green text-enterprise-navy font-bold px-4 py-1.5 md:px-8 md:py-2.5 text-[10px] md:text-sm tracking-widest uppercase hover:bg-accent-green hover:text-white transition-colors flex-shrink-0">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
