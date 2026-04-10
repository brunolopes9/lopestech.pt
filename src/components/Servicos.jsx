import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCheckCircle, FaStar, FaMobileAlt, FaLaptop, FaCode, FaShieldAlt, FaNetworkWired, FaHdd, FaWindows, FaTools } from "react-icons/fa";

const servicos = [
  {
    id: "reparacoes",
    icon: FaMobileAlt,
    emoji: "📱",
    title: "Reparação de Smartphones",
    description:
      "Ecrãs, baterias, conectores de carga, botões, chassis, vidros traseiros e problemas de motherboard com micro-soldaduras.",
    details: [
      "Ecrãs originais e compatíveis",
      "Baterias certificadas",
      "Conectores de carga",
      "Botões e chassis",
      "Micro-soldaduras na motherboard",
      "Recuperação de equipamentos com danos por água",
    ],
    highlight: "Sem conserto, não paga. Orçamentos e diagnósticos gratuitos.",
  },
  {
    id: "computadores",
    icon: FaLaptop,
    emoji: "💻",
    title: "Reparação de Computadores",
    description:
      "Diagnóstico e reparação de computadores desktop e portáteis. Upgrades de hardware e otimização de performance.",
    details: [
      "Diagnóstico completo",
      "Upgrades de RAM e disco SSD",
      "Limpeza interna e substituição de peças",
      "Otimização de performance",
      "Instalação de sistemas operativos",
      "Reparação de portáteis e desktops",
    ],
  },
  {
    id: "software",
    icon: FaCode,
    emoji: "⚡",
    title: "Desenvolvimento de Software",
    description:
      "Websites, aplicações e software à medida para qualquer necessidade. Do conceito à produção.",
    details: [
      "Websites responsivos e modernos",
      "Aplicações web personalizadas",
      "Software de gestão à medida",
      "APIs e integrações",
      "E-commerce e lojas online",
      "Manutenção e suporte contínuo",
    ],
  },
  {
    id: "recuperacao",
    icon: FaHdd,
    emoji: "💾",
    title: "Recuperação de Dados",
    description:
      "Recuperação de dados de discos rígidos, SSDs, pen drives e cartões de memória danificados.",
    details: [
      "Discos rígidos avariados",
      "SSDs com falhas",
      "Pen drives danificadas",
      "Cartões de memória corrompidos",
      "Equipamentos com danos por água",
      "Diagnóstico gratuito",
    ],
  },
  {
    id: "redes",
    icon: FaNetworkWired,
    emoji: "🌐",
    title: "Redes & Infraestrutura",
    description:
      "Instalação e configuração de redes domésticas e empresariais. WiFi, cablagem, VPNs e servidores.",
    details: [
      "Redes WiFi domésticas e empresariais",
      "Cablagem estruturada",
      "Configuração de VPNs",
      "Servidores Windows Server",
      "Hardware de rede",
      "Infraestrutura completa",
    ],
  },
  {
    id: "seguranca",
    icon: FaShieldAlt,
    emoji: "🔒",
    title: "Segurança Informática",
    description:
      "Proteção contra vírus, malware e ameaças online. Backups de dados, firewalls e remoção de ameaças.",
    details: [
      "Antivírus e anti-malware",
      "Remoção de vírus e malware",
      "Configuração de firewalls",
      "Backups automáticos",
      "Proteção de dados",
      "Consultoria em segurança",
    ],
  },
  {
    id: "windows",
    icon: FaWindows,
    emoji: "🖥️",
    title: "Instalação Windows & Office",
    description:
      "Instalação de Microsoft Windows e Office originais com ativação. Configuração completa do seu sistema.",
    details: [
      "Windows 10 e 11 original",
      "Microsoft Office com licença",
      "Ativação genuína",
      "Configuração personalizada",
      "Drivers e atualizações",
      "Migração de dados",
    ],
  },
  {
    id: "manutencao",
    icon: FaTools,
    emoji: "🔧",
    title: "Manutenção Preventiva",
    description:
      "Relatórios, suporte remoto, contratos mensais e visitas técnicas. Instalação de Windows e Office originais.",
    details: [
      "Contratos de manutenção mensal",
      "Suporte remoto",
      "Visitas técnicas programadas",
      "Relatórios de estado",
      "Atualizações de segurança",
      "Monitorização contínua",
    ],
  },
];

const servicosExtra = [
  {
    emoji: "🛡️",
    title: "Películas de Vidro",
    description:
      "Aplicação na hora por 9€. Venha tomar um café ao Café Flor do Calvário e enquanto bebe o seu café, colocamos uma película a um preço incrível e fazemos o diagnóstico de algum problema que possa ter.",
    price: "9€",
  },
  {
    emoji: "💳",
    title: "Payshop",
    description:
      "Pagamento de faturas (água, luz, gás, telecomunicações), impostos, portagens, carregamentos de telemóvel e cartões pré-pagos. Serviço gratuito.",
    price: "Gratuito",
  },
  {
    emoji: "📦",
    title: "Ponto de Recolha",
    description:
      "Somos ponto de recolha oficial de encomendas. Receba as suas encomendas connosco de forma prática e segura.",
    price: null,
  },
];

export default function Servicos() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Os Nossos Serviços
          </h2>
        </div>

        {/* Highlight */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 border border-green-300 text-green-800 rounded-full font-semibold text-sm">
              ✅ Orçamentos e diagnósticos gratuitos
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-100 border border-amber-300 text-amber-800 rounded-full font-semibold text-sm">
              🛡️ Quando não tem conserto, não paga
            </span>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            const isExpanded = expandedService === servico.id;
            return (
              <div
                key={servico.id}
                className={`relative group rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${
                  isExpanded
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-[1.02] border-blue-700"
                    : "bg-white border-gray-200 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
                }`}
                onClick={() => setExpandedService(isExpanded ? null : servico.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "bg-white/20"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="text-2xl">{servico.emoji}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{servico.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isExpanded ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {servico.description}
                </p>

                {servico.highlight && (
                  <div
                    className={`mt-3 flex items-center gap-2 text-xs font-semibold ${
                      isExpanded ? "text-yellow-300" : "text-green-600"
                    }`}
                  >
                    <FaStar size={12} />
                    {servico.highlight}
                  </div>
                )}

                <div className={`mt-3 text-xs font-medium ${isExpanded ? "text-blue-200" : "text-blue-500"}`}>
                  {isExpanded ? "▲ Ver menos" : "▼ Ver mais detalhes"}
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

        {/* Extra services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Serviços Adicionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicosExtra.map((extra, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{extra.emoji}</span>
                    <h4 className="font-bold text-gray-900 text-lg">{extra.title}</h4>
                  </div>
                  {extra.price && (
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full">
                      {extra.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {extra.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp size={22} />
            Orçamento via WhatsApp
          </a>
          <a
            href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            <FaEnvelope size={20} />
            Orçamento por Email
          </a>
        </div>
      </div>
    </section>
  );
}
