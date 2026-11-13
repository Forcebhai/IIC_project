import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, ShieldCheck, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegistrationModal({ isOpen, onClose, defaultTier = 'student' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Student / Researcher',
    passType: defaultTier,
    pitchInterest: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F4B51B', '#38BDF8', '#FFFFFF', '#FFD84D'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-[#0B132B]/95 border border-white/20 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#AEB3B8] hover:text-white transition-colors"
          aria-label="Close registration"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B51B]/15 border border-[#F4B51B]/30 text-[11px] font-mono text-[#F4B51B] mb-2 font-bold">
                <Ticket className="w-3.5 h-3.5" />
                <span>OFFICIAL SUMMIT REGISTRATION</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">
                Register for ELEVATE 360
              </h3>
              <p className="text-xs text-[#AEB3B8] font-mono mt-1">
                Sister Nivedita University • October 7 – 8, 2026
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#AEB3B8] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sayan Mukherjee"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F4B51B] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-[#AEB3B8] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F4B51B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#AEB3B8] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F4B51B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#AEB3B8] mb-1">
                  Institution / Organization *
                </label>
                <input
                  type="text"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Sister Nivedita University / Tech Startup"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F4B51B] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-[#AEB3B8] mb-1">
                    Pass Category
                  </label>
                  <select
                    name="passType"
                    value={formData.passType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101B38] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F4B51B] transition-colors"
                  >
                    <option value="student">Student Innovator Pass (FREE)</option>
                    <option value="founder">Startup & Founder Pass (₹1,499)</option>
                    <option value="vip">VIP / Investor Pass (₹4,999)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#AEB3B8] mb-1">
                    Primary Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101B38] border border-white/10 text-white text-sm focus:outline-none focus:border-[#F4B51B] transition-colors"
                  >
                    <option value="Student / Researcher">Student / Researcher</option>
                    <option value="Startup Founder / Co-Founder">Startup Founder / Co-Founder</option>
                    <option value="AI Software Engineer">AI Software Engineer</option>
                    <option value="Investor / Angel / VC">Investor / Angel / VC</option>
                    <option value="Faculty / Educator">Faculty / Educator</option>
                  </select>
                </div>
              </div>

              {/* Pitch Interest Checkbox */}
              <label className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 cursor-pointer">
                <input
                  type="checkbox"
                  name="pitchInterest"
                  checked={formData.pitchInterest}
                  onChange={handleChange}
                  className="mt-1 rounded text-[#F4B51B] focus:ring-[#F4B51B]"
                />
                <span className="text-xs text-[#D2D6DC] leading-relaxed">
                  I wish to apply for the <strong>Start-up Pitch Competition</strong> (₹25L+ prize pool). Send me deck submission guidelines.
                </span>
              </label>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F4B51B] via-[#FFD84D] to-[#F4B51B] text-[#050814] font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(244,181,27,0.4)] hover:shadow-[0_6px_28px_rgba(244,181,27,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing Registration...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#050814]" />
                    <span>Confirm Summit Pass</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#AEB3B8] text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified by SNU-IIC Innovation Council</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#F4B51B]/20 border border-[#F4B51B]/40 flex items-center justify-center mx-auto mb-4 text-[#F4B51B]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#F4B51B] font-bold block mb-1">
              REGISTRATION CONFIRMED
            </span>
            <h3 className="text-2xl font-display font-extrabold text-white mb-2">
              Welcome to ELEVATE 360!
            </h3>
            <p className="text-xs sm:text-sm text-[#AEB3B8] max-w-sm mx-auto mb-6">
              Thank you, <strong>{formData.name}</strong>. Your delegate badge confirmation has been registered for October 7–8, 2026.
            </p>

            {/* Simulated Digital Badge */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-left max-w-xs mx-auto mb-6 text-xs font-mono space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#AEB3B8]">PASS TYPE:</span>
                <span className="text-[#F4B51B] font-bold uppercase">{formData.passType}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#AEB3B8]">DELEGATE:</span>
                <span className="text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#AEB3B8]">VENUE:</span>
                <span className="text-white">SNU Campus, Kolkata</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#AEB3B8]">BADGE ID:</span>
                <span className="text-emerald-400 font-bold">#ELV-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-mono font-semibold transition-all"
            >
              Close & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

