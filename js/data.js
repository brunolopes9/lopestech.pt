const reparacoes = [
  { id: 1, device: "Samsung Galaxy S22 Ultra", brand: "Samsung", problem: "Ecrã partido, já nem dava imagem", solution: "Substituição de ecrã original Samsung", price: "a partir de 200€", time: "45 min", photos: [{ before: "assets/reparacoes/samsung-s22-ultra/frente-antes.jpg", after: "assets/reparacoes/samsung-s22-ultra/frente-depois.jpg", label: "Frente" }] },
  { id: 2, device: "iPhone 14 Pro Max", brand: "Apple", problem: "Caiu de alta altitude, traseira toda partida", solution: "Substituição de vidro traseiro", price: "a partir de 55€", time: "1h30", photos: [{ before: "assets/reparacoes/iphone-14-pro-max/traseira-antes.jpg", after: "assets/reparacoes/iphone-14-pro-max/traseira-depois.jpg", label: "Traseira" }] },
  { id: 3, device: "iPhone 12 Pro Max", brand: "Apple", problem: "Bateria a 70%, ecrã partido e traseira partida", solution: "Bateria nova, ecrã Soft OLED e vidro traseiro novo", price: "a partir de 150€", time: "2h", photos: [{ before: "assets/reparacoes/iphone-12-pro-max/frente-antes.jpg", after: "assets/reparacoes/iphone-12-pro-max/frente-depois.jpg", label: "Frente" }, { before: "assets/reparacoes/iphone-12-pro-max/traseira-antes.png", after: "assets/reparacoes/iphone-12-pro-max/traseira-depois.jpg", label: "Traseira" }] },
  { id: 4, device: "iPhone 11", brand: "Apple", problem: "Traseira e laterais danificadas, ecrã danificado", solution: "Ecrã novo, bateria nova e chassis novo (mudou de vermelho para branco a pedido do cliente)", price: "a partir de 100€", time: "2h", photos: [{ before: "assets/reparacoes/iphone-11/frente-antes.jpg", after: "assets/reparacoes/iphone-11/frente-depois.jpg", label: "Frente" }, { before: "assets/reparacoes/iphone-11/traseira-antes.jpg", after: "assets/reparacoes/iphone-11/traseira-depois.jpg", label: "Traseira" }] },
  { id: 5, device: "iPhone X", brand: "Apple", problem: "Um carro passou por cima do telemóvel", solution: "Ecrã novo, chassis lateral e vidro traseiro novo", price: "a partir de 95€", time: "2h", photos: [{ before: "assets/reparacoes/iphone-x/frente-antes.jpg", after: "assets/reparacoes/iphone-x/frente-depois.jpg", label: "Frente" }, { before: "assets/reparacoes/iphone-x/traseira-antes.jpg", after: "assets/reparacoes/iphone-x/traseira-depois.jpg", label: "Traseira" }] },
  { id: 6, device: "iPhone 8", brand: "Apple", problem: "Um carro passou por cima, ecrã partido, chassis empenado e vidro traseiro partido", solution: "Ecrã novo e chassis novo", price: "a partir de 90€", time: "2h", photos: [{ before: "assets/reparacoes/iphone-8/antes.jpg", after: "assets/reparacoes/iphone-8/depois.jpg", label: "Completo" }] },
  { id: 7, device: "Samsung S23 Ultra", brand: "Samsung", problem: "Ecrã partido", solution: "Ecrã compatível com película de gel (opção económica)", price: "a partir de 130€", time: "45 min", photos: [{ before: "assets/reparacoes/samsung-s23-ultra/traseira-antes.jpg", after: "assets/reparacoes/samsung-s23-ultra/frente-depois.jpg", label: "Frente" }] },
  { id: 8, device: "Oppo", brand: "Oppo", problem: "Traseira riscada, vidro da câmera partido e ecrã partido", solution: "Traseira nova (cor diferente a pedido do cliente) e ecrã novo", price: "a partir de 70€", time: "1h", photos: [{ before: "assets/reparacoes/oppo/antes.jpg", after: "assets/reparacoes/oppo/depois.jpg", label: "Completo" }] },
  { id: 9, device: "CrossCall", brand: "CrossCall", problem: "Ecrã partido", solution: "Substituição de ecrã novo", price: "a partir de 50€", time: "1h", photos: [{ before: "assets/reparacoes/crosscall/antes.jpg", after: "assets/reparacoes/crosscall/depois.png", label: "Frente" }] },
  { id: 10, device: "Lenovo Tablet", brand: "Lenovo", problem: "Ecrã partiu, deixou de dar imagem", solution: "Substituição do vidro do tablet", price: "a partir de 85€", time: "1h", photos: [{ before: "assets/reparacoes/lenovo-tablet/antes.png", after: "assets/reparacoes/lenovo-tablet/depois.jpg", label: "Frente" }] },
  { id: 11, device: "iPhone 13 Pro", brand: "Apple", problem: "Vidro traseiro partido", solution: "Vidro traseiro novo", price: "a partir de 55€", time: "1h30", photos: [{ before: "assets/reparacoes/iphone-13-pro/traseira-antes.jpg", after: "assets/reparacoes/iphone-13-pro/traseira-depois.jpg", label: "Traseira" }] },
  { id: 12, device: "iPhone 13 (traseira)", brand: "Apple", problem: "Vidro traseiro partido", solution: "Vidro traseiro novo", price: "a partir de 55€", time: "1h30", photos: [{ before: "assets/reparacoes/iphone-13/traseira-antes.png", after: "assets/reparacoes/iphone-13/traseira-depois.png", label: "Traseira" }] },
  { id: 13, device: "iPhone 13 (ecrã)", brand: "Apple", problem: "Ecrã partido", solution: "Ecrã novo", price: "a partir de 70€", time: "45 min", photos: [{ before: "assets/reparacoes/outro-iphone-13/frente-antes.jpg", after: "assets/reparacoes/outro-iphone-13/frente-depois.jpg", label: "Frente" }] },
  { id: 14, device: "iPhone 6 Plus", brand: "Apple", problem: "Ecrã partido", solution: "Ecrã novo", price: "a partir de 45€", time: "45 min", photos: [{ before: "assets/reparacoes/iphone-6-plus/frente-antes.jpg", after: "assets/reparacoes/iphone-6-plus/frente-depois.png", label: "Frente" }] },
  { id: 15, device: "Samsung A02", brand: "Samsung", problem: "Ecrã todo partido, já nem dava imagem", solution: "Ecrã novo", price: "desde 45€", time: "45 min", photos: [{ before: "assets/reparacoes/samsung-a02/frente-antes.jpg", after: "assets/reparacoes/samsung-a02/frente-depois.png", label: "Frente" }] },
  { id: 16, device: "Samsung A21s", brand: "Samsung", problem: "Ecrã partido", solution: "Ecrã novo", price: "desde 45€", time: "45 min", photos: [{ before: "assets/reparacoes/samsung-a21s/frente-antes.jpg", after: "assets/reparacoes/samsung-a21s/frente-depois.jpg", label: "Frente" }] },
  { id: 17, device: "Samsung A02s", brand: "Samsung", problem: "Ecrã partido", solution: "Ecrã novo", price: "a partir de 45€", time: "45 min", photos: [{ before: "assets/reparacoes/samsung-a02s/frente-antes.jpg", after: "assets/reparacoes/samsung-a02s/frente-depois.jpg", label: "Frente" }] },
  { id: 18, device: "Xiaomi 13C", brand: "Xiaomi", problem: "Ecrã partido", solution: "Ecrã novo", price: "a partir de 45€", time: "45 min", photos: [{ before: "assets/reparacoes/xiaomi-13c/frente-antes.jpg", after: "assets/reparacoes/xiaomi-13c/frente-depois.jpg", label: "Frente" }] },
  { id: 19, device: "Xiaomi Mi 9", brand: "Xiaomi", problem: "Vidro traseiro partido", solution: "Vidro traseiro novo", price: "a partir de 40€", time: "45 min", photos: [{ before: "assets/reparacoes/xiaomi-mi-9/traseira-antes.jpg", after: "assets/reparacoes/xiaomi-mi-9/traseira-depois.jpg", label: "Traseira" }] },
];

const videos = [
  { id: "E_h5DjCnnss", title: { pt: "Reparação do Vidro Traseiro - iPhone 13 Pro", en: "Back Glass Repair - iPhone 13 Pro" }, description: { pt: "Processo completo de substituição do vidro traseiro na LopesTech", en: "Complete back glass replacement process at LopesTech" } },
  { id: "OnKtv0bGWBg", title: { pt: "Reparação Completa - iPhone 15 Pro", en: "Complete Repair - iPhone 15 Pro" }, description: { pt: "Processo completo de reparação na LopesTech", en: "Complete repair process at LopesTech" } },
  { id: "QjtyUNCyMd0", title: { pt: "Ecrã, Bateria e Chassis - iPhone 8", en: "Screen, Battery and Chassis - iPhone 8" }, description: { pt: "Substituição completa de ecrã, bateria e chassis na LopesTech", en: "Complete screen, battery and chassis replacement at LopesTech" } },
  { id: "KoIj4a6GTwc", title: { pt: "iPhone XR - Antes e Depois", en: "iPhone XR - Before and After" }, description: { pt: "Reparação completa de iPhone XR — chassis novo e ecrã novo", en: "Complete iPhone XR repair — new chassis and screen" } },
];

const featuredProject = {
  title: "eBL Blockchain & Digital Supply Chain",
  description: {
    pt: "Sistema empresarial que revoluciona o transporte marítimo ao digitalizar os Bill of Lading (BL) para Electronic Bill of Lading (EBL) na blockchain. Elimina os BLs em papel. Cada EBL recebe um token ID único, assegurando total transparência na digital supply chain. Um passo decisivo na transição para o Web3 nos transportes internacionais.",
    en: "Enterprise system revolutionizing maritime transport by digitizing Bills of Lading (BL) into Electronic Bills of Lading (EBL) on the blockchain. Eliminates paper BLs. Each EBL receives a unique token ID, ensuring total transparency in the digital supply chain. A decisive step in the Web3 transition for international shipping.",
  },
  tags: [".NET 10", "React", "SQL Server", "Blockchain", "Web3", "Python"],
  images: ["assets/projetos/blockchain3.png","assets/projetos/blockchain2.png", ],
};

const projects = [
  {
    title: "NextHire — Portal de Emprego",
    description: {
      pt: "Plataforma de emprego com gestão de candidaturas, mensagens em tempo real, agendamento de entrevistas, notificações, analytics e exportação CSV. ",
      en: "Job platform with application management, real-time messaging, interview scheduling, notifications, analytics and CSV export. "
    },
    tags: ["MongoDB", "Express", "React 19", "Node.js", "Tailwind CSS", "JWT"],
    link: "https://nexthire-3-frontend.onrender.com/",
    github: "https://github.com/brunolopes9/NextHire",
    images: ["assets/projetos/NextHire/1.png", "assets/projetos/NextHire/2.png"],
  },
  {
    title: "BestCall.pt — Site Corporativo",
    description: {
      pt: "Primeiro site profissional desenvolvido para a empresa BestCall em Portugal.",
      en: "First professional website developed for the BestCall company in Portugal."
    },
    tags: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "SASS"],
    link: "https://bestcall.pt/",
    images: ["assets/projetos/Bestcall/1.png", "assets/projetos/Bestcall/2.png"],
  },
  {
    title: "BLE Worker Tracking System",
    description: {
      pt: "Sistema de rastreamento de trabalhadores em tempo real com Bluetooth Low Energy desenvolvido para a HUF Portuguesa.",
      en: "Real-time worker tracking system using Bluetooth Low Energy developed for HUF Portuguesa."
    },
    tags: ["Node.js", "PHP", "MQTT", "Socket.IO", "Chart.js", "BLE"],
    github: "https://github.com/brunolopes9/ble_tracking_system",
    images: ["assets/projetos/BLE/1.png", "assets/projetos/BLE/2.png"],
  },
  {
    title: "RankingApp — Tier List Builder",
    description: {
      pt: "Aplicação para criar tier lists com drag & drop.",
      en: "Application for building  tier lists with drag & drop. "
    },
    tags: ["React 19", "ASP.NET Core 8", "C#", "Tailwind", "Recharts"],
    github: "https://github.com/brunolopes9/rankingApp",
    images: [
      "assets/projetos/RankingApp/1.png",
      "assets/projetos/RankingApp/2.png"
    ],
  },
  {
    title: "SimpleShop — E-Commerce",
    description: {
      pt: "Plataforma de e-commerce com catálogo, utilizadores e encomendas, sessões e carrinho. ",
      en: "E-commerce platform with catalog, users and orders, sessions and cart."
    },
    tags: ["Fastify", "MongoDB", "MySQL", "Redis", "Sequelize", "EJS"],
    github: "https://github.com/brunolopes9/SimpleShop",
    images: [ "assets/projetos/SimpleShop/2.png","assets/projetos/SimpleShop/1.png"],
  },
  {
    title: "DontForget — Gestor de Tarefas",
    description: {
      pt: "Gestor de tarefas com lembretes multicanal: email, SMS , notificações de browser e webhooks.",
      en: "Task manager with multi-channel reminders: email, SMS , browser notifications and webhooks."
    },
    tags: ["React 19", "Redux Toolkit", "Express 5", "Tailwind", "Twilio"],
    link: "https://dontforget-sigma.vercel.app/",
    github: "https://github.com/brunolopes9/myTodo",
    images: [
      "assets/projetos/DontForget/1.png"
    ],
  },
  {
    title: " Employee Management",
    description: {
      pt: "Sistema de gestão de funcionários",
      en: "Employee management system."
    },
    tags: [".NET 8", "C#", "EF Core", "SQL Server", "React 19", "Recharts"],
    github: "https://github.com/brunolopes9/netCRUD",
    images: [
      "assets/projetos/NetCRUD/1.png"
    ],
  },
  {
    title: "TrainTweet — Social Platform",
    description: {
      pt: "Clone profissional do Twitter/X com AI chatbot integrado.",
      en: "Professional Twitter/X clone with integrated AI chatbot."
    },
    tags: ["React 19", "Vite 7", "React Router 7", "Recharts", "CSS Modules"],
    github: "https://github.com/brunolopes9/TrainTwitter",
    images: [
      "assets/projetos/TrainTwitter/1.png",
      "assets/projetos/TrainTwitter/2.png",
      "assets/projetos/TrainTwitter/3.png",
    ],
  },
  {
    title: "TypeMaster Pro — Typing Speed",
    description: {
      pt: "Aplicação de teste de velocidade de escrita com 3 modos (tempo, palavras, citações).",
      en: "Typing speed test application with 3 modes (time, words, quotes)."
    },
    tags: ["HTML5", "CSS3", "Vanilla JS", "Canvas API", "Web Audio API"],
    link: "https://brunolopes9.github.io/TypingSpeed/",
    github: "https://github.com/brunolopes9/TypingSpeed",
    images: ["assets/projetos/TypingSpeed/1.png", "assets/projetos/TypingSpeed/2.png"],
  },
  {
    title: "TimeForge — Time Management Suite",
    description: {
      pt: "Suite completa de gestão de tempo : relógio analógico , world clock, cronómetro, timer, técnica Pomodoro com estatísticas, alarmes com som personalizado.",
      en: "Complete time management suite: analog clock, world clock, stopwatch, timer, Pomodoro technique with statistics, alarms with custom sound."
    },
    tags: ["HTML5", "SVG", "CSS3", "Vanilla JS", "Web Audio API"],
    link: "https://brunolopes9.github.io/clock/",
    github: "https://github.com/brunolopes9/clock",
    images: ["assets/projetos/Clock/1.png", "assets/projetos/Clock/2.png"],
  },
  {
    title: "DevLinks — Cartão Digital",
    description: {
      pt: "Agregador de links no formato de cartão de visita digital online. Design clean com tema dark/light.",
      en: "Link aggregator in the format of an online digital business card. Clean design with dark/light theme."
    },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://brunolopes9.github.io/DevLinks/",
    github: "https://github.com/brunolopes9/DevLinks",
    images: [
      "assets/projetos/DevLinks/1.png",
      "assets/projetos/DevLinks/2.png",
      "assets/projetos/DevLinks/3.png",
    ],
  },
  {
    title: " Portfólio Pessoal",
    description: {
      pt: "Portfólio pessoal moderno ",
      en: "Modern personal portfolio "
    },
    tags: ["Next.js 15", "TypeScript", "Tailwind v4", "Framer Motion"],
    link: "https://bruno-folio-8y1g.vercel.app/",
    github: "https://github.com/brunolopes9/BrunoFolio",
        images: [
      "assets/projetos/BrunoFolio/photo1.png",
      "assets/projetos/BrunoFolio/photo2.png",
    ],
  },
];

const techStack = [

];
