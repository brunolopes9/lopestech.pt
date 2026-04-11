import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTimes } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function LegalModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center">
          <FaTimes size={16} className="text-gray-900 dark:text-white" />
        </button>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pr-12">{title}</h3>
        <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-400">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [modal, setModal] = useState(null);
  const { t } = useLanguage();
  const f = t("footer");

  const serviceHrefs = ["#servicos", "#servicos", "#software", "#servicos", "#servicos"];
  const usefulHrefs = ["#sobre", "#reparacoes", "#contacto", "https://share.google/5tCfb4JNChIZEGHOu", "https://www.livroreclamacoes.pt/"];

  return (
    <>
      <footer className="bg-slate-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/sobre-mim/logo.jpg" alt="LopesTech" className="h-10 w-10 rounded-lg" />
                <span className="text-xl font-bold text-white">Lopes<span className="text-blue-400">Tech</span></span>
              </div>
              <p className="text-sm leading-relaxed">{f.description}</p>
              <div className="flex gap-3 mt-4">
                <a href="https://www.facebook.com/lopestech.pt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition"><FaFacebook size={18} /></a>
                <a href="https://www.instagram.com/lopestech.pt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition"><FaInstagram size={18} /></a>
                <a href="https://www.linkedin.com/in/brunolopes9/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-lg flex items-center justify-center transition"><FaLinkedin size={18} /></a>
                <a href="https://wa.me/351933938716" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition"><FaWhatsapp size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">{f.servicos}</h4>
              <ul className="space-y-2 text-sm">
                {f.serviceLinks.map((link, i) => (
                  <li key={i}><a href={serviceHrefs[i]} className="hover:text-white transition">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">{f.useful}</h4>
              <ul className="space-y-2 text-sm">
                {f.usefulLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={usefulHrefs[i]}
                      {...(usefulHrefs[i].startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">{f.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setModal("privacidade")} className="hover:text-white transition">{f.privacy}</button></li>
                <li><button onClick={() => setModal("cookies")} className="hover:text-white transition">{f.cookies}</button></li>
                <li><button onClick={() => setModal("termos")} className="hover:text-white transition">{f.terms}</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} LopesTech. {f.rights}</p>
            <p className="text-gray-500">Bruno Lopes | NIF: 263758141 | Viseu, Portugal</p>
          </div>
        </div>
      </footer>

      {modal === "privacidade" && (
        <LegalModal title={f.privacy} onClose={() => setModal(null)}>
          <p><strong>LopesTech</strong> {f.privacyContent.intro}</p>
          <h4>{f.privacyContent.dataTitle}</h4>
          <p>{f.privacyContent.dataText}</p>
          <h4>{f.privacyContent.purposeTitle}</h4>
          <p>{f.privacyContent.purposeText}</p>
          <h4>{f.privacyContent.retentionTitle}</h4>
          <p>{f.privacyContent.retentionText}</p>
          <h4>{f.privacyContent.rightsTitle}</h4>
          <p>{f.privacyContent.rightsText}</p>
        </LegalModal>
      )}

      {modal === "cookies" && (
        <LegalModal title={f.cookies} onClose={() => setModal(null)}>
          <p>{f.cookiesContent.intro}</p>
          <h4>{f.cookiesContent.whatTitle}</h4>
          <p>{f.cookiesContent.whatText}</p>
          <h4>{f.cookiesContent.usedTitle}</h4>
          <p>{f.cookiesContent.usedText}</p>
        </LegalModal>
      )}

      {modal === "termos" && (
        <LegalModal title={f.terms} onClose={() => setModal(null)}>
          <h4>{f.termsContent.repairTitle}</h4>
          <p>{f.termsContent.repairText}</p>
          <h4>{f.termsContent.warrantyTitle}</h4>
          <p>{f.termsContent.warrantyText}</p>
          <h4>{f.termsContent.liabilityTitle}</h4>
          <p>{f.termsContent.liabilityText}</p>
          <h4>{f.termsContent.softwareTitle}</h4>
          <p>{f.termsContent.softwareText}</p>
        </LegalModal>
      )}
    </>
  );
}
