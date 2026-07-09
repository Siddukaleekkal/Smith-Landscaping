"use client";

export default function JobberForm() {
  return (
    <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden w-full max-w-[800px] relative min-h-[600px]">
      <iframe 
        src="https://clienthub.getjobber.com/hubs/d0b3a27f-cdee-43dc-be57-187302254d45/public/requests/1835800/embedded_new?" 
        width="100%" 
        height="1400"
        style={{ border: 'none' }}
        title="Request a Quote"
        sandbox="allow-forms allow-scripts allow-same-origin allow-modals allow-popups"
        className="w-full relative z-10"
      />
    </div>
  );
}
