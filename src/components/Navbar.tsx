import React from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf", external: true },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background/90 backdrop-blur border-b border-border shadow-lg animate-fade-in-down">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-white tracking-widest transition-transform duration-300 hover:scale-105 hover:text-purple-400 animate-navbar-glow">SRIVENKATESH</a>
        <ul className="flex gap-6">
          {navLinks.map((link, idx) => (
            <li key={link.name} className="group">
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-lg text-white font-semibold px-3 py-1 rounded-lg transition-all duration-300 hover:text-purple-400 hover:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 group-hover:scale-105 group-hover:shadow-lg animate-pulse-glow"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <span className="inline-block animate-navbar-link-fade">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
