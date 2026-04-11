import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCheckCircle, FaStar, FaMobileAlt, FaLaptop, FaCode, FaShieldAlt, FaNetworkWired, FaHdd, FaWindows, FaTools } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const iconMap = {
  reparacoes: FaMobileAlt,
  computadores: FaLaptop,
  software: FaCode,
  recuperacao: FaHdd,
  redes: FaNetworkWired,
  seguranca: FaShieldAlt,
  windows: FaWindows,
  manutencao: FaTools,
};

export default function Servicos() {
  const [expandedService, setExpandedService] = useState(null);
  const { t } = useLanguage();
  const s = t("servicos");

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            {s.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            {s.title}
          </h2>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 rounded-full font-semibold text-sm">
              ✅ {s.badgeFree}
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 rounded-full font-semibold text-sm">
              🛡️ {s.badgeNoPay}
            </span>
          </div>
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mb-0 md:snap-none">
          {s.services.map((servico) => {
            const Icon = iconMap[servico.id];
            const isExpanded = expandedService === servico.id;
            return (
              <div
                key={servico.id}
                className={`min-w-[280px] snap-start md:min-w-0 relative group rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${
                  isExpanded
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-[1.02] border-blue-700"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
                }`}
                onClick={() => setExpandedService(isExpanded ? null : servico.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "bg-white/20"
                        : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"
                    }`}
                  >
                    {Icon && <Icon size={22} />}
                  </div>
                  <span className="text-2xl">{servico.emoji}</span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${!isExpanded ? "text-gray-900 dark:text-white" : ""}`}>{servico.title}</h3>
                <p className={`text-sm leading-relaxed ${isExpanded ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>
                  {servico.description}
                </p>

                {servico.highlight && (
                  <div className={`mt-3 flex items-center gap-2 text-xs font-semibold ${isExpanded ? "text-yellow-300" : "text-green-600 dark:text-green-400"}`}>
                    <FaStar size={12} />
                    {servico.highlight}
                  </div>
                )}

                <div className={`mt-3 text-xs font-medium ${isExpanded ? "text-blue-200" : "text-blue-500 dark:text-blue-400"}`}>
                  {isExpanded ? `▲ ${s.lessDetails}` : `▼ ${s.moreDetails}`}
                </div>

                {isExpanded && (
                  <ul className="mt-4 space-y-2 border-t border-white/20 pt-4">
                    {servico.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                        <FaCheckCircle size={12} className="text-blue-300 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {s.extraTitle}
          </h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
            {s.extra.map((extra, i) => (
              <div
                key={i}
                className="min-w-[280px] snap-start md:min-w-0 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{extra.emoji}</span>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{extra.title}</h4>
                  </div>
                  {extra.price && (
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full">
                      {extra.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {extra.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp size={22} />
            {s.ctaWhatsapp}
          </a>
          <a
            href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            <FaEnvelope size={20} />
            {s.ctaEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
