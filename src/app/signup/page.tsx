"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request to Google Sheets webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-20 px-[5%]">
      <div className="max-w-xl mx-auto bg-white shadow-xl border border-slate-100 rounded-sm overflow-hidden">
        
        {/* Header Area */}
        <div className="bg-enterprise-navy text-white p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Mail size={120} />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl font-light tracking-wide mb-4">Stay Connected</h1>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              Sign up for Smith Landscaping updates to receive seasonal tips, service announcements, and industry insights directly in your inbox.
            </p>
          </div>
        </div>

        {/* Form Area */}
        <div className="p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500">
                    First Name <span className="text-accent-green">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    className="border border-slate-200 p-3 text-slate-700 focus:outline-none focus:border-accent-green transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500">
                    Last Name <span className="text-accent-green">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    className="border border-slate-200 p-3 text-slate-700 focus:outline-none focus:border-accent-green transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500">
                  Email Address <span className="text-accent-green">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="border border-slate-200 p-3 text-slate-700 focus:outline-none focus:border-accent-green transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-[11px] font-extrabold tracking-widest uppercase text-slate-500">
                  Company / Organization
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="border border-slate-200 p-3 text-slate-700 focus:outline-none focus:border-accent-green transition-colors"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 bg-accent-green text-white font-bold tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-2 hover:bg-enterprise-navy transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe Now'}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
              
              <p className="text-[11px] text-slate-400 text-center mt-2 font-light">
                Your information is securely processed and stored. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-accent-green">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-2xl font-bold text-enterprise-navy mb-4">You're on the list!</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Thank you for subscribing to Smith Landscaping updates. We've securely added your information to our roster.
              </p>
              <Link 
                href="/" 
                className="border-2 border-accent-green text-enterprise-navy font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-accent-green hover:text-white transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
