import React from 'react';
import NavLink from './NavLink';

export default function DesktopNav({
  links,
  activeSection,
  onNavigate,
}) {
  return (
    <nav className="hidden lg:flex items-center gap-1.5 px-5 py-2 rounded-full bg-black/35 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      {links.map((link) => (
        <NavLink
          key={link.id}
          label={link.label}
          href={link.href}
          isActive={activeSection === link.id}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(link.href, link.id);
          }}
        />
      ))}
    </nav>
  );
}
