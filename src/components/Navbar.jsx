import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggleDark } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const links = t("nav.links");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-slate-900 ${
        scrolled ? "shadow-lg" : "shadow-md dark:shadow-slate-800/50"
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
            <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Lopes<span className="text-blue-600">Tech</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle - dual flags */}
            <div className="flex items-center ml-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
              <button
                onClick={() => setLang("pt")}
                className={`px-2 py-1.5 rounded-md text-sm transition-all ${
                  lang === "pt"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "opacity-50 hover:opacity-80"
                }`}
                title="Português"
              >
                <img src="https://flagcdn.com/w40/pt.png" alt="PT" className="w-5 h-3.5 object-cover rounded-sm" />
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1.5 rounded-md text-sm transition-all ${
                  lang === "en"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "opacity-50 hover:opacity-80"
                }`}
                title="English"
              >
                <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-3.5 object-cover rounded-sm" />
              </button>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="ml-1 px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            {/* CTA buttons */}
            <a
              href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-1.5 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <FaWhatsapp size={16} />
              {t("nav.cta")}
            </a>
            <a
              href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento"
              className="ml-1 flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <FaEnvelope size={14} />
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
              <button
                onClick={() => setLang("pt")}
                className={`px-1.5 py-1 rounded-md text-sm transition-all ${
                  lang === "pt" ? "bg-white dark:bg-gray-700 shadow-sm" : "opacity-50"
                }`}
              >
                <img src="https://flagcdn.com/w40/pt.png" alt="PT" className="w-5 h-3.5 object-cover rounded-sm" />
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-1.5 py-1 rounded-md text-sm transition-all ${
                  lang === "en" ? "bg-white dark:bg-gray-700 shadow-sm" : "opacity-50"
                }`}
              >
                <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-3.5 object-cover rounded-sm" />
              </button>
            </div>
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-gray-900 dark:text-white"
            >
              {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-gray-900 dark:text-white"
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-gray-800 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2">
              <a
                href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg"
              >
                <FaWhatsapp size={18} /> {t("nav.cta")}
              </a>
              <a
                href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg"
              >
                <FaEnvelope size={16} /> {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
