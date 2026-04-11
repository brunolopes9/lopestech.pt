import { useState } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contacto() {
  const [form, setForm] = useState({ nome: "", email: "", servico: "", mensagem: "" });
  const { t } = useLanguage();
  const c = t("contacto");

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg = `${c.whatsappMsg} ${form.nome}.\n\n${c.whatsappService}: ${form.servico}\n\n${form.mensagem}\n\nEmail: ${form.email}`;
    window.open(`https://wa.me/351933938716?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = `${c.emailSubject} - ${form.servico}`;
    const body = `${c.emailBody} ${form.nome}.\n\n${c.emailServiceLabel}: ${form.servico}\n\n${form.mensagem}\n\n${c.emailContact}: ${form.email}`;
    window.location.href = `mailto:contacto@lopestech.pt?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const locationLines = c.locationText.split("\n");

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">{c.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">{c.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">{c.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{c.formTitle}</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{c.name} *</label>
                <input type="text" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 dark:text-white" placeholder={c.namePlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{c.email} *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 dark:text-white" placeholder={c.emailPlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{c.serviceType} *</label>
                <select required value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 dark:text-white">
                  <option value="">{c.serviceSelect}</option>
                  {c.serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{c.message} *</label>
                <textarea required rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-900 dark:text-white" placeholder={c.messagePlaceholder} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button onClick={handleWhatsApp} className="flex items-center justify-center gap-2 px-4 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition">
                  <FaWhatsapp size={20} /> {c.whatsapp}
                </button>
                <button onClick={handleEmail} className="flex items-center justify-center gap-2 px-4 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition">
                  <FaEnvelope size={18} /> {c.emailBtn}
                </button>
                <a href="tel:+351933938716" className="flex items-center justify-center gap-2 px-4 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition">
                  <FaPhone size={16} /> {c.call}
                </a>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0"><FaPhone size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{c.phone}</h4>
                  <a href="tel:+351933938716" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">+351 933 938 716</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0"><FaEnvelope size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{c.emailLabel}</h4>
                  <a href="mailto:contacto@lopestech.pt" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">contacto@lopestech.pt</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0"><FaMapMarkerAlt size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{c.locationLabel}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{locationLines.map((line, i) => <span key={i}>{line}{i < locationLines.length - 1 && <br />}</span>)}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0"><FaClock size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{c.schedule}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{c.scheduleText}<br /><span className="text-sm text-gray-500 dark:text-gray-500">{c.scheduleNote}</span></p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">{c.social}</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://www.facebook.com/lopestech.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-xl transition">
                  <FaFacebook className="text-blue-600 dark:text-blue-400" size={20} /><span className="text-sm font-medium text-gray-700 dark:text-gray-300">Facebook</span>
                </a>
                <a href="https://www.instagram.com/lopestech.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 rounded-xl transition">
                  <FaInstagram className="text-pink-600 dark:text-pink-400" size={20} /><span className="text-sm font-medium text-gray-700 dark:text-gray-300">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/brunolopes9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/40 rounded-xl transition">
                  <FaLinkedin className="text-sky-600 dark:text-sky-400" size={20} /><span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
                </a>
                <a href="https://share.google/5tCfb4JNChIZEGHOu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-xl transition">
                  <FaGoogle className="text-amber-600 dark:text-amber-400" size={20} /><span className="text-sm font-medium text-gray-700 dark:text-gray-300">{c.google}</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042!2d-7.8636!3d40.6574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd234b6bc135475b%3A0x544afc94a19d0e54!2sLopes%20Tech!5e0!3m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização LopesTech - São Pedro de France, Viseu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
