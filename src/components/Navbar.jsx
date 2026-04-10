import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#reparacoes", label: "Reparações" },
  { href: "#software", label: "Software" },
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/assets/sobre-mim/logo.jpg"
              alt="LopesTech"
              className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover"
            />
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              Lopes<span className="text-blue-600">Tech</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Pedir Orçamento
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-900"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-4 py-3 bg-green-500 text-white text-center font-semibold rounded-lg"
            >
              Pedir Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
