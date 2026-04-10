import { FaGraduationCap, FaBriefcase, FaRocket, FaSeedling, FaCalendarAlt, FaUsers, FaAward, FaMapMarkerAlt } from "react-icons/fa";

const timeline = [
  { year: "2022", icon: FaSeedling, title: "Primeiras reparações", description: "Comecei a reparar smartphones enquanto tirava o curso de Engenharia Informática. Zero experiência, muita curiosidade e dedicação." },
  { year: "2023", icon: FaGraduationCap, title: "Crescimento orgânico", description: "O boca a boca trouxe cada vez mais clientes. Investi em ferramentas e formação. Centenas de equipamentos reparados." },
  { year: "2024", icon: FaBriefcase, title: "Experiência profissional", description: "Primeiro emprego como developer. Aprendi arquitectura de software e boas práticas." },
  { year: "2025", icon: FaRocket, title: "LopesTech nasce", description: "Criei a marca, Registei nas finanças e expandi online pela primeira vez. É o inicio da realização de um sonho pessoal onde espero contribuir positivamente e entregar sempre os melhores serviços a toda a gente." },
];

const stats = [
  { icon: FaCalendarAlt, value: "3+", label: "Anos de experiência" },
  { icon: FaUsers, value: "300+", label: "Clientes satisfeitos" },
  { icon: FaAward, value: "Eng.", label: "Informática" },
  { icon: FaMapMarkerAlt, value: "Viseu", label: "São Pedro de France" },
];

export default function SobreMim() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Quem sou eu</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Bruno Lopes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="flex gap-6">
              <img src="/assets/sobre-mim/foto-profissional.jpg" alt="Bruno Lopes" className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Engenheiro Informático</h3>
                <p className="text-gray-500 mt-1">Viseu, Portugal</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full">Eng. Informática</span>
                  <span className="px-3 py-1 bg-green-100 border border-green-200 text-green-700 text-xs font-semibold rounded-full">+300 clientes</span>
                  <span className="px-3 py-1 bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold rounded-full">3+ anos</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Tenho 22 anos, nasci e cresci em Viseu, numa pequena aldeia chamada São Pedro de France. Desde sempre apaixonado por tecnologia, segui Engenharia Informática na universidade.</p>
              <p>Em 2022, enquanto tirava o curso, comecei a fazer reparações de smartphones — do zero, apenas com curiosidade, dedicação e vontade de aprender. Fui investindo em ferramentas, formação e prática, e o negócio cresceu organicamente pelo boca a boca.</p>
              <p>Os meus pais têm o Café Flor do Calvário, onde cresci, e é ao lado desse café que tenho o meu espaço de trabalho. Os clientes dos meus pais tornaram-se os meus primeiros clientes — tomam um café enquanto eu trato do telemóvel.</p>
              <p>Hoje, com mentalidade empreendedora e experiência profissional em desenvolvimento de software, criei a <span className="text-blue-600 font-semibold">LopesTech</span> — onde junto reparação, software à medida e venda de equipamentos num serviço completo de tecnologia.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <Icon className="text-blue-600 mx-auto mb-2" size={20} />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <img src="/assets/sobre-mim/cartao-visita.png" alt="Cartão de Visita LopesTech" className="w-full max-w-md rounded-xl shadow-md border border-gray-200" />
            </div>
          </div>

          <div className="space-y-6">
            <img src="/assets/sobre-mim/foto-casual.png" alt="Bruno Lopes a trabalhar" className="w-full max-w-sm mx-auto rounded-2xl shadow-xl" />

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">O meu percurso</h3>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      {i < timeline.length - 1 && <div className="w-0.5 h-full bg-blue-200 mt-1" />}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.year}</span>
                      <h4 className="font-bold text-gray-900 mt-0.5">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
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
