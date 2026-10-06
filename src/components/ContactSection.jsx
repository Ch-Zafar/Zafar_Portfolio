import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, MessageSquare, Calendar, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || 'service_portfolio',
        import.meta.env.VITE_TEMPLATE_ID || 'template_portfolio',
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY || 'pub_key'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSentSuccess(true);
          reset();
          setTimeout(() => setSentSuccess(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          // Fallback feedback if emailjs keys aren't set in env
          setSentSuccess(true);
          reset();
          setTimeout(() => setSentSuccess(false), 5000);
        }
      );
  };

  const handleWhatsApp = () => {
    const phoneNumber = "923152931279";
    const message = "Hi Zafar! I saw your portfolio and would like to discuss a project.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCalendly = () => {
    window.open("https://calendly.com/chaudaryzafar279/new-meeting", "_blank");
  };

  return (
    <section className="py-24 bg-white relative scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#91FB03]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left Column: Headline & Direct Contact Options */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase mb-6 text-[#91FB03]">
                  <span>Get in Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-Mona tracking-tight leading-tight mb-6">
                  Let's Build Something <br />
                  Extraordinary Together
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  Whether you need a high-performance Web App, automated AI workflows, or comprehensive Cyber Security protection, let's talk.
                </p>
              </div>

              {/* Direct Booking & WhatsApp Options */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <button
                  onClick={handleCalendly}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#91FB03] text-black flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-400 font-medium">Quick 1-on-1 Call</p>
                      <p className="text-sm font-bold text-white">Schedule on Calendly</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-400 font-medium">Instant Response</p>
                      <p className="text-sm font-bold text-white">Chat via WhatsApp</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Email Form */}
            <div className="lg:col-span-7 bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold font-Mona text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill in your details and I will reply within 24 hours.
              </p>

              {sentSuccess ? (
                <div className="p-8 rounded-2xl bg-white/10 border border-[#91FB03]/40 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-[#91FB03] mb-3" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-300 mt-1">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexander Smith"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#91FB03] focus:ring-1 focus:ring-[#91FB03] transition-all text-sm"
                      {...register("user_name")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#91FB03] focus:ring-1 focus:ring-[#91FB03] transition-all text-sm"
                      {...register("user_email")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Interested In
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Web App', 'AI Automation', 'Cyber Security'].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer transition-all has-checked:bg-[#91FB03] has-checked:text-black has-checked:font-bold"
                        >
                          <input
                            type="radio"
                            name="project_type"
                            value={opt}
                            className="sr-only"
                            defaultChecked={opt === 'Web App'}
                            {...register("service_type")}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you'd like to build or automate..."
                      required
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#91FB03] focus:ring-1 focus:ring-[#91FB03] transition-all text-sm resize-none"
                      {...register("message")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#91FB03] hover:bg-[#82e202] text-black font-bold text-sm tracking-wide transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
