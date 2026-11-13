import React from 'react';

export default function FooterLinkColumn({ title, links, onNavigate }) {
  return (
    <div>
      <h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
        {title}
      </h4>
      <ul className="list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.label} className="mb-3">
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.href);
              }}
              className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900 cursor-pointer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

