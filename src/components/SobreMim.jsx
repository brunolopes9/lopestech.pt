import { FaCalendarAlt, FaUsers, FaAward, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const statIcons = [FaCalendarAlt, FaUsers, FaAward, FaMapMarkerAlt];

export default function SobreMim() {
  const { t } = useLanguage();
  const s = t("sobre");

  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">{s.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">{s.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="flex gap-6">
              <img src="/assets/sobre-mim/foto-profissional.jpg" alt="Bruno Lopes" className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{s.role}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{s.location}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">{s.badges[0]}</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">{s.badges[1]}</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full">{s.badges[2]}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              {s.bio.map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {s.stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
                    <Icon className="text-blue-600 dark:text-blue-400 mx-auto mb-2" size={20} />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <img src="/assets/sobre-mim/cartao-visita.png" alt="Cartão de Visita LopesTech" className="w-full max-w-md rounded-xl shadow-md border border-gray-200 dark:border-gray-700" />
            </div>
          </div>

          <div className="space-y-6">
            <img src="/assets/sobre-mim/foto-casual.png" alt="Bruno Lopes a trabalhar" className="w-full max-w-sm mx-auto rounded-2xl shadow-xl" />

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{s.timelineTitle}</h3>
              <div className="space-y-6">
                {s.timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      {i < s.timeline.length - 1 && <div className="w-0.5 h-full bg-blue-200 dark:bg-blue-800 mt-1" />}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{item.year}</span>
                      <h4 className="font-bold text-gray-900 dark:text-white mt-0.5">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
