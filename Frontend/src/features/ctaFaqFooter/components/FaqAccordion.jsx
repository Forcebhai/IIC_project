import React, { useState } from 'react';
import FaqItem from './FaqItem';

export default function FaqAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col justify-center gap-3">
      {items.map((item, index) => (
        <FaqItem
          key={item.id}
          item={item}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

