import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqItem({ item, isActive, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className="bg-white border rounded-[10px] py-[18px] px-5 cursor-pointer transition-all duration-200 hover:border-[#eaeaea] outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      style={{
        borderColor: isActive ? '#eaeaea' : '#f0f0f0',
        boxShadow: isActive
          ? '0 4px 12px rgba(0, 0, 0, 0.04)'
          : '0 2px 8px rgba(0, 0, 0, 0.02)',
      }}
    >
      <div className="flex justify-between items-center font-normal text-[0.9rem] text-neutral-900 select-none">
        <span className="pr-4">{item.question}</span>
        <span className="shrink-0 text-neutral-600">
          {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </div>

      {isActive && (
        <div className="mt-3 text-[0.9rem] text-[#666] leading-[1.6] transition-all">
          {item.answer}
        </div>
      )}
    </div>
  );
}

