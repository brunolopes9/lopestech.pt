import { useState } from "react";
import { reparacoes } from "../data/reparacoes";
import { FaClock, FaEuroSign, FaTimes, FaWhatsapp, FaEnvelope, FaPlay } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function RepairCard({ repair, onClick, t }) {
  const hasPhotos = repair.photos && repair.photos.length > 0;
  const hasVideos = repair.videos;
  const mainPhoto = hasPhotos ? repair.photos[0] : null;

  return (
    <div
      onClick={() => onClick(repair)}
      className="min-w-[260px] snap-start sm:min-w-[280px] lg:min-w-0 group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
    >
      {hasPhotos && mainPhoto && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 overflow-hidden">
              <img src={mainPhoto.before} alt={t("reparacoes.before")} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-1/2 overflow-hidden">
              <img src={mainPhoto.after} alt={t("reparacoes.after")} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-0.5 h-full bg-white/80" />
            <div className="absolute top-3 left-3 px-2 py-1 bg-red-500/90 text-white text-xs font-bold rounded">{t("reparacoes.before").toUpperCase()}</div>
            <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-xs font-bold rounded">{t("reparacoes.after").toUpperCase()}</div>
          </div>
          {repair.photos.length > 1 && (
            <div className="absolute bottom-3 left-3 px-2 py-1 bg-blue-600/90 text-white text-xs font-bold rounded">
              +{repair.photos.length} {t("reparacoes.photos")}
            </div>
          )}
        </div>
      )}
      {hasVideos && !hasPhotos && (
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 flex items-center justify-center">
          <FaPlay size={32} className="text-white/60" />
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-blue-600/90 text-white text-xs font-bold rounded">{t("reparacoes.videoLabel")}</div>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{repair.device}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{repair.problem}</p>
        <div className="flex items-center gap-4 mt-3 text-sm">
          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
            <FaEuroSign size={12} />
            {repair.price}
          </span>
          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <FaClock size={12} />
            {repair.time}
          </span>
        </div>
      </div>
    </div>
  );
}

function RepairModal({ repair, onClose, t }) {
  if (!repair) return null;
  const hasPhotos = repair.photos && repair.photos.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center">
          <FaTimes size={16} className="text-gray-900 dark:text-white" />
        </button>
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 pr-12">{repair.device}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{repair.solution}</p>

          {hasPhotos && repair.photos.map((photo, idx) => (
            <div key={idx} className="mb-6">
              {repair.photos.length > 1 && (
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{photo.label}</h4>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold rounded-lg mb-2">{t("reparacoes.before")}</span>
                  <img src={photo.before} alt={t("reparacoes.before")} className="w-full rounded-xl" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-lg mb-2">{t("reparacoes.after")}</span>
                  <img src={photo.after} alt={t("reparacoes.after")} className="w-full rounded-xl" />
                </div>
              </div>
            </div>
          ))}

          {repair.videos && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold rounded-lg mb-2">{t("reparacoes.before")}</span>
                <video controls className="w-full rounded-xl" preload="metadata">
                  <source src={repair.videos.before} type="video/quicktime" />
                </video>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-lg mb-2">{t("reparacoes.after")}</span>
                <video controls className="w-full rounded-xl" preload="metadata">
                  <source src={repair.videos.after} type="video/quicktime" />
                </video>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">{t("reparacoes.price")}</div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{repair.price}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">{t("reparacoes.time")}</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">{repair.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reparacoes() {
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [filter, setFilter] = useState("Todos");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();
  const r = t("reparacoes");

  const allLabel = r.all;
  const brands = [allLabel, ...new Set(reparacoes.map((rep) => rep.brand))];
  const filtered = reparacoes.filter((rep) => filter === allLabel || rep.brand === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="reparacoes" className="py-20 md:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">{r.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">{r.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">{r.description}</p>
          <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">📅 {r.appointment}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
          {r.highlights.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => { setFilter(brand); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === brand
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:snap-none">
          {displayed.map((repair) => (
            <RepairCard key={repair.id} repair={repair} onClick={setSelectedRepair} t={t} />
          ))}
        </div>

        {filtered.length > 8 && !showAll && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
              {r.viewAll} ({filtered.length})
            </button>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{r.ctaTitle}</h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">{r.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/351933938716?text=Olá! O meu equipamento precisa de reparação." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105">
              <FaWhatsapp size={22} /> {r.ctaWhatsapp}
            </a>
            <a href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento - Reparação"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 border border-white/30">
              <FaEnvelope size={20} /> {r.ctaEmail}
            </a>
          </div>
        </div>
      </div>

      <RepairModal repair={selectedRepair} onClose={() => setSelectedRepair(null)} t={t} />
    </section>
  );
}
