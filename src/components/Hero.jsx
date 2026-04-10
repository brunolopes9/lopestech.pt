import { FaWhatsapp, FaEnvelope, FaArrowDown, FaMobileAlt, FaCode, FaShoppingBag } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <img src="/assets/hero.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase">
            Tecnologia & Inovação · Viseu
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Lopes<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tech</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          Reparação de smartphones e computadores, desenvolvimento de software à
          medida e venda de equipamentos.
        </p>

        {/* Highlight badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-white text-sm font-medium">
            📍 Viseu, Portugal
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-500/25 rounded-full text-green-300 text-sm font-medium">
            ✅ Orçamentos e diagnósticos gratuitos
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-300 text-sm font-medium">
            🛡️ Não tem conserto, não paga
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <FaWhatsapp size={24} />
            Pedir Orçamento Grátis
          </a>
          <a
            href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento"
            className="group flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <FaEnvelope size={20} />
            Pedir Orçamento por Email
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            Ver Serviços
          </a>
        </div>

        {/* Stats - fixed layout */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">😊 300+</div>
            <div className="text-sm text-gray-400 mt-1">Clientes satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">⏳ 3+</div>
            <div className="text-sm text-gray-400 mt-1">Anos no mercado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">📱 30+</div>
            <div className="text-sm text-gray-400 mt-1">Modelos diferentes</div>
          </div>
        </div>

        {/* Service boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 flex items-center gap-4 hover:border-blue-400/40 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
              <FaMobileAlt className="text-blue-400" size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">Reparação</p>
              <p className="text-xs text-gray-400">Smartphones & PC</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 flex items-center gap-4 hover:border-purple-400/40 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
              <FaCode className="text-purple-400" size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">Software</p>
              <p className="text-xs text-gray-400">Websites & Apps</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 flex items-center gap-4 hover:border-amber-400/40 transition-colors">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
              <FaShoppingBag className="text-amber-400" size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">Equipamentos</p>
              <p className="text-xs text-gray-400">Novos c/ garantia</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <FaArrowDown size={20} />
      </a>
    </section>
  );
}
