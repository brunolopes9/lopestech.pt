import {
  FaMobileAlt,
  FaLaptop,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaHdd,
  FaWindows,
  FaTools,
} from "react-icons/fa";

export const servicos = [
  {
    id: "reparacoes",
    icon: FaMobileAlt,
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
    highlight: null,
  },
  {
    id: "software",
    icon: FaCode,
    title: "Desenvolvimento de Software",
    description:
      "Websites, aplicações e software à medida para qualquer situação. Soluções profissionais que fazem o seu negócio crescer.",
    details: [
      "Websites responsivos e modernos",
      "Aplicações web personalizadas",
      "Software de gestão à medida",
      "APIs e integrações",
      "E-commerce e lojas online",
      "Manutenção e suporte contínuo",
    ],
    highlight: null,
  },
  {
    id: "recuperacao",
    icon: FaHdd,
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
    highlight: null,
  },
  {
    id: "redes",
    icon: FaNetworkWired,
    title: "Redes e Infraestrutura",
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
    highlight: null,
  },
  {
    id: "seguranca",
    icon: FaShieldAlt,
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
    highlight: null,
  },
  {
    id: "windows",
    icon: FaWindows,
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
    highlight: null,
  },
  {
    id: "manutencao",
    icon: FaTools,
    title: "Manutenção Preventiva",
    description:
      "Relatórios, suporte remoto, contratos mensais e visitas técnicas para manter os seus equipamentos a funcionar.",
    details: [
      "Contratos de manutenção mensal",
      "Suporte remoto",
      "Visitas técnicas programadas",
      "Relatórios de estado",
      "Atualizações de segurança",
      "Monitorização contínua",
    ],
    highlight: null,
  },
];

export const servicosExtra = [
  {
    title: "Películas de Vidro",
    description:
      "Aplicação de películas de vidro na hora por 9€. Venha tomar um café ao Café Flor do Calvário e enquanto bebe o seu café, colocamos uma película a um preço incrível e fazemos o diagnóstico de algum problema que possa ter.",
    price: "9€",
  },
  {
    title: "Payshop",
    description:
      "Pague faturas (água, luz, gás, telecomunicações), impostos, portagens, carregue telemóveis e títulos de transporte, compras online e cartões pré-pagos. Serviço gratuito, funciona com dinheiro.",
    price: "Gratuito",
  },
  {
    title: "Ponto de Recolha",
    description:
      "Somos ponto de recolha oficial de encomendas. Receba as suas encomendas connosco de forma prática e segura.",
    price: null,
  },
];
