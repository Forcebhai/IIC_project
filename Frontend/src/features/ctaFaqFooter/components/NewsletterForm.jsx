import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'idle' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage('Thank you for subscribing to ELEVATE 360 updates!');
    setEmail('');
  };

  return (
    <div>
      <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
        Stay Connected
      </h4>
      <p className="text-[0.85rem] text-[#888] mb-[15px]">
        Get the latest updates on AI, start-ups, innovation and upcoming summit initiatives.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex gap-[10px] max-[480px]:flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status) setStatus(null);
            }}
            placeholder="Enter your email..."
            className="flex-grow border border-[#f0f0f0] bg-white outline-none transition-colors duration-200 focus:border-[#ccc] text-[0.9rem]"
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)',
            }}
          />
          <button
            type="submit"
            className="bg-neutral-900 text-white border-none font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-[0.9rem] whitespace-nowrap"
            style={{
              padding: '12px 28px',
              borderRadius: '10px',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
            }}
          >
            Subscribe
          </button>
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-[0.8rem] mt-2 font-normal">
            {message}
          </p>
        )}
        {status === 'success' && (
          <p className="text-emerald-600 text-[0.8rem] mt-2 font-normal">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

