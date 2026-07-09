import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Smith Landscaping',
  description: 'Get in touch with Smith Landscaping for all your commercial and residential landscaping needs.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Premium Header */}
      <section className="bg-enterprise-navy text-white pt-24 pb-20 px-[5%] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase mb-6 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a comprehensive property maintenance plan or a complete landscape transformation, our team is ready to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-light text-enterprise-navy mb-10">We'd love to hear from you.</h2>
            
            <div className="flex flex-col gap-10">
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0 text-accent-green">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-extrabold tracking-widest text-slate-400 uppercase mb-2">Phone</h4>
                  <a href="tel:804-240-1950" className="text-enterprise-navy text-lg hover:text-accent-green transition-colors">
                    804-240-1950
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0 text-accent-green">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-extrabold tracking-widest text-slate-400 uppercase mb-2">Email</h4>
                  <a href="mailto:contact@smithlawnva.com" className="text-enterprise-navy text-lg hover:text-accent-green transition-colors">
                    contact@smithlawnva.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0 text-accent-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-extrabold tracking-widest text-slate-400 uppercase mb-2">Service Area</h4>
                  <p className="text-enterprise-navy text-lg leading-relaxed">
                    Proudly serving commercial and residential properties across Virginia.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0 text-accent-green">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-extrabold tracking-widest text-slate-400 uppercase mb-2">Business Hours</h4>
                  <p className="text-enterprise-navy text-lg leading-relaxed">
                    Monday - Friday<br/>
                    8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-2/3 bg-[#F8F9FA] p-8 md:p-12 rounded-[24px] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-enterprise-navy mb-8">Send a Message</h3>
            <form className="flex flex-col gap-6" action="https://formsubmit.co/contact@smithlawnva.com" method="POST">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Inquiry from Website" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm outline-none focus:border-accent-green transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm outline-none focus:border-accent-green transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm outline-none focus:border-accent-green transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm outline-none focus:border-accent-green transition-colors" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">Service of Interest</label>
                <select id="service" name="service" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm outline-none focus:border-accent-green transition-colors text-enterprise-navy" required>
                  <option value="">Select a service...</option>
                  <option value="Maintenance">Comprehensive Maintenance</option>
                  <option value="Hardscaping">Hardscaping & Construction</option>
                  <option value="Design">Landscape Design & Installation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-extrabold tracking-widest text-slate-500 uppercase">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-sm outline-none focus:border-accent-green transition-colors resize-none" required></textarea>
              </div>

              <button type="submit" className="mt-4 bg-accent-green text-white font-bold text-[14px] tracking-widest uppercase py-5 px-8 hover:bg-enterprise-navy transition-colors w-full md:w-auto self-start">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
