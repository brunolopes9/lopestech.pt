import { FaWhatsapp, FaEnvelope, FaArrowDown, FaMobileAlt, FaCode, FaShoppingBag } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const boxIcons = [
  { icon: FaMobileAlt, color: "text-blue-400", bg: "bg-blue-500/20", hover: "hover:border-blue-400/40" },
  { icon: FaCode, color: "text-purple-400", bg: "bg-purple-500/20", hover: "hover:border-purple-400/40" },
  { icon: FaShoppingBag, color: "text-amber-400", bg: "bg-amber-500/20", hover: "hover:border-amber-400/40" },
];

export default function Hero() {
  const { t } = useLanguage();
  const hero = t("hero");

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
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium tracking-wider uppercase">
            {hero.badge}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Lopes<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tech</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          {hero.description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {hero.badges.map((b, i) => (
            <span key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              i === 0 ? "bg-white/10 border border-white/15 text-white" :
              i === 1 ? "bg-green-500/15 border border-green-500/25 text-green-300" :
              "bg-amber-500/15 border border-amber-500/25 text-amber-300"
            }`}>
              {b.emoji} {b.text}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <FaWhatsapp size={24} />
            {hero.ctaWhatsapp}
          </a>
          <a
            href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento"
            className="group flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <FaEnvelope size={20} />
            {hero.ctaEmail}
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            {hero.ctaServices}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">{stat.emoji} {stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-4">
          {hero.boxes.map((box, i) => {
            const Icon = boxIcons[i].icon;
            return (
              <div key={i} className={`bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 flex items-center gap-4 ${boxIcons[i].hover} transition-colors`}>
                <div className={`w-12 h-12 ${boxIcons[i].bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className={boxIcons[i].color} size={22} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">{box.title}</p>
                  <p className="text-xs text-gray-400">{box.subtitle}</p>
                </div>
              </div>
            );
          })}
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
