import React from 'react';
import JobberForm from '@/components/ui/JobberForm';

export const metadata = {
  title: 'Get a Quote | Smith Landscaping',
  description: 'Request a customized landscaping maintenance or design quote from Smith Landscaping.',
};

export default function QuotePage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-24 pb-32">
      <div className="max-w-[1000px] mx-auto px-0 md:px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 text-center px-6 md:px-0">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase flex-shrink-0 block mb-4">
            ESTIMATE
          </span>
          <h1 className="text-4xl md:text-5xl text-enterprise-navy font-light tracking-tight max-w-3xl mx-auto mb-6">
            Get a Quote
          </h1>
          <p className="text-slate-500 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
            Ready to upgrade your home's curb appeal or need a reliable contractor for your commercial property? Request your free estimate today.
          </p>
        </div>

        {/* Jobber Embed Section */}
        <div className="w-full flex justify-center">
          <JobberForm />
        </div>
      </div>
    </div>
  );
}
