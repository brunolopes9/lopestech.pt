import { useState } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Contacto() {
  const [form, setForm] = useState({ nome: "", email: "", servico: "", mensagem: "" });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome}.\n\nServiço: ${form.servico}\n\n${form.mensagem}\n\nEmail: ${form.email}`;
    window.open(`https://wa.me/351933938716?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = `Pedido de Orçamento - ${form.servico}`;
    const body = `Olá!\n\nO meu nome é ${form.nome}.\n\nServiço pretendido: ${form.servico}\n\n${form.mensagem}\n\nContacto: ${form.email}`;
    window.location.href = `mailto:contacto@lopestech.pt?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Fale connosco</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Contacto</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Entre em contacto para pedir um orçamento, tirar dúvidas ou agendar uma reparação. Resposta rápida garantida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Envie a sua mensagem</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Nome *</label>
                <input type="text" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900" placeholder="O seu nome" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900" placeholder="email@exemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Tipo de Serviço *</label>
                <select required value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900">
                  <option value="">Selecione um serviço</option>
                  <option>Reparação de Smartphone</option>
                  <option>Reparação de Computador</option>
                  <option>Desenvolvimento de Software / Website</option>
                  <option>Recuperação de Dados</option>
                  <option>Redes e Infraestrutura</option>
                  <option>Segurança Informática</option>
                  <option>Instalação Windows / Office</option>
                  <option>Manutenção Preventiva</option>
                  <option>Película de Vidro</option>
                  <option>Compra de Equipamento Novo</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Mensagem *</label>
                <textarea required rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-900" placeholder="Descreva o que precisa..." />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button onClick={handleWhatsApp} className="flex items-center justify-center gap-2 px-4 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition">
                  <FaWhatsapp size={20} /> WhatsApp
                </button>
                <button onClick={handleEmail} className="flex items-center justify-center gap-2 px-4 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition">
                  <FaEnvelope size={18} /> Email
                </button>
                <a href="tel:+351933938716" className="flex items-center justify-center gap-2 px-4 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition">
                  <FaPhone size={16} /> Ligar
                </a>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 border border-blue-200 text-blue-600 rounded-xl flex items-center justify-center shrink-0"><FaPhone size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefone</h4>
                  <a href="tel:+351933938716" className="text-gray-600 hover:text-blue-600">+351 933 938 716</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 border border-blue-200 text-blue-600 rounded-xl flex items-center justify-center shrink-0"><FaEnvelope size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <a href="mailto:contacto@lopestech.pt" className="text-gray-600 hover:text-blue-600">contacto@lopestech.pt</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 border border-blue-200 text-blue-600 rounded-xl flex items-center justify-center shrink-0"><FaMapMarkerAlt size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Localização</h4>
                  <p className="text-gray-600">Lopes Tech<br />Av. da Igreja, Figueiredo<br />3505-347 Viseu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 border border-blue-200 text-blue-600 rounded-xl flex items-center justify-center shrink-0"><FaClock size={16} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Horário</h4>
                  <p className="text-gray-600">Por marcação prévia<br /><span className="text-sm text-gray-500">Contacte para agendar</span></p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Redes Sociais</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://www.facebook.com/lopestech.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-xl transition">
                  <FaFacebook className="text-blue-600" size={20} /><span className="text-sm font-medium text-gray-700">Facebook</span>
                </a>
                <a href="https://www.instagram.com/lopestech.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-pink-50 border border-pink-200 hover:bg-pink-100 rounded-xl transition">
                  <FaInstagram className="text-pink-600" size={20} /><span className="text-sm font-medium text-gray-700">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/brunolopes9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-sky-50 border border-sky-200 hover:bg-sky-100 rounded-xl transition">
                  <FaLinkedin className="text-sky-600" size={20} /><span className="text-sm font-medium text-gray-700">LinkedIn</span>
                </a>
                <a href="https://share.google/5tCfb4JNChIZEGHOu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-amber-50 border border-amber-200 hover:bg-amber-100 rounded-xl transition">
                  <FaGoogle className="text-amber-600" size={20} /><span className="text-sm font-medium text-gray-700">Avaliar no Google</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.5!2d-7.8636!3d40.6574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd233b15d60c28c5%3A0x4a5b8e5f7c9d2e1a!2sLopes%20Tech!5e0!3m2!1spt-PT!2spt!4v1!5m2!1spt-PT!2spt"
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
