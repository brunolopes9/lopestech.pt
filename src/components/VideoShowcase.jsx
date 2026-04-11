import { useLanguage } from "../contexts/LanguageContext";

const videos = [
  {
    id: "E_h5DjCnnss",
    title: { pt: "Reparação do Vidro Traseiro - iPhone 13 Pro", en: "Back Glass Repair - iPhone 13 Pro" },
    description: { pt: "Processo completo de substituição do vidro traseiro na LopesTech", en: "Complete back glass replacement process at LopesTech" },
  },
  {
    id: "OnKtv0bGWBg",
    title: { pt: "Reparação Completa - iPhone 15 Pro", en: "Complete Repair - iPhone 15 Pro" },
    description: { pt: "Processo completo de reparação na LopesTech", en: "Complete repair process at LopesTech" },
  },
  {
    id: "QjtyUNCyMd0",
    title: { pt: "Ecrã, Bateria e Chassis - iPhone 8", en: "Screen, Battery and Chassis - iPhone 8" },
    description: { pt: "Substituição completa de ecrã, bateria e chassis na LopesTech", en: "Complete screen, battery and chassis replacement at LopesTech" },
  },
  {
    id: "KoIj4a6GTwc",
    title: { pt: "iPhone XR - Antes e Depois", en: "iPhone XR - Before and After" },
    description: { pt: "Reparação completa de iPhone XR — chassis novo e ecrã novo", en: "Complete iPhone XR repair — new chassis and screen" },
  },
];

export default function VideoShowcase() {
  const { lang, t } = useLanguage();
  const v = t("video");

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            {v.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            {v.title}
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            {v.description}
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:snap-none max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="min-w-[260px] snap-start lg:min-w-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <div className="aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title[lang]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm">{video.title[lang]}</h3>
                <p className="text-gray-400 text-xs mt-1">{video.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
