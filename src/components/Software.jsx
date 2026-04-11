import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaWhatsapp, FaEnvelope, FaChevronLeft, FaChevronRight, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiTypescript, SiTailwindcss, SiReact, SiMongodb, SiPython } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";

const featuredProject = {
  title: "eBL Middleware — Blockchain & Digital Supply Chain",
  description: {
    pt: "Sistema middleware empresarial que revoluciona o transporte marítimo ao digitalizar os Bill of Lading (BL) para Electronic Bill of Lading (EBL) na blockchain. Elimina os BLs em papel — cada edição, transferência ou aprovação de levantamento é registada de forma imutável e rastreável. As empresas (carriers, shippers, consignees) têm contratos e carteiras na blockchain, garantindo segurança, confiança e rapidez em cada operação. Cada EBL recebe um token ID único, assegurando total transparência na digital supply chain. Um passo decisivo na transição para o Web3 nos transportes internacionais.",
    en: "Enterprise middleware system revolutionizing maritime transport by digitizing Bills of Lading (BL) into Electronic Bills of Lading (EBL) on the blockchain. Eliminates paper BLs — every edit, transfer or pickup approval is immutably recorded and traceable. Companies (carriers, shippers, consignees) have contracts and wallets on the blockchain, ensuring security, trust and speed in every operation. Each EBL receives a unique token ID, ensuring total transparency in the digital supply chain. A decisive step in the Web3 transition for international shipping.",
  },
  tags: [".NET 10", "React", "SQL Server", "Blockchain", "Web3", "Python"],
  images: ["/assets/projetos/blockchain1.png", "/assets/projetos/blockchain2.png", "/assets/projetos/blockchain3.png"],
};

const projects = [
  {
    title: "NextHire — Portal de Emprego",
    description: { pt: "Portal de emprego full-stack MERN. Employers publicam vagas, candidatos pesquisam e gerem candidaturas.", en: "Full-stack MERN job portal. Employers post jobs, candidates search and manage applications." },
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    link: "https://next-hire-ashen.vercel.app",
    github: "https://github.com/brunolopes9/NextHire",
    image: "https://raw.githubusercontent.com/brunolopes9/NextHire/main/frontend/NextHire/public/1.png",
  },
  {
    title: "RankingApp — Classificador Interativo",
    description: { pt: "Aplicação interativa com drag & drop para classificar filmes ou álbuns. Full-stack com React e ASP.NET Core.", en: "Interactive drag & drop app for ranking movies or albums. Full-stack with React and ASP.NET Core." },
    tags: ["React", "ASP.NET Core", "C#", "Tailwind CSS"],
    github: "https://github.com/brunolopes9/rankingApp",
    image: "https://raw.githubusercontent.com/brunolopes9/rankingApp/main/rankingapp.client/public/RankingApp1.png",
  },
  {
    title: "SimpleShop — E-Commerce",
    description: { pt: "E-commerce com múltiplas bases de dados: MySQL, MongoDB e Redis. Segurança com Argon2.", en: "E-commerce with multiple databases: MySQL, MongoDB and Redis. Security with Argon2." },
    tags: ["Fastify", "MySQL", "MongoDB", "Redis"],
    github: "https://github.com/brunolopes9/SimpleShop",
    image: "https://raw.githubusercontent.com/brunolopes9/SimpleShop/main/public/1.png",
  },
  {
    title: "BLE Tracking System",
    description: { pt: "Sistema de rastreamento industrial com BLE. Projeto em parceria com HUF Portuguesa.", en: "Industrial tracking system with BLE. Project in partnership with HUF Portuguesa." },
    tags: ["Node.js", "PHP", "MQTT", "BLE"],
    github: "https://github.com/brunolopes9/ble_tracking_system",
  },
  {
    title: "BrunoFolio — Portfólio",
    description: { pt: "Portfólio pessoal moderno com dark mode, animações e formulário de contacto com API.", en: "Modern personal portfolio with dark mode, animations and contact form with API." },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://bruno-folio-8y1g.vercel.app/",
    github: "https://github.com/brunolopes9/BrunoFolio",
  },
  {
    title: "DevLinks — Cartão Digital",
    description: { pt: "Cartão de visitas digital interativo com links para redes sociais e contacto.", en: "Interactive digital business card with social media and contact links." },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://brunolopes9.github.io/DevLinks/",
    github: "https://github.com/brunolopes9/DevLinks",
  },
  {
    title: "Bulky MVC — Gestão",
    description: { pt: "Aplicação MVC para gestão de produtos com CRUD completo e autorização por roles.", en: "MVC application for product management with full CRUD and role-based authorization." },
    tags: ["ASP.NET Core", "C#", "SQL Server"],
    github: "https://github.com/brunolopes9/Bulky_MVC",
  },
  {
    title: "netCRUD — API REST",
    description: { pt: "API RESTful com CRUD completo demonstrando boas práticas de backend.", en: "RESTful API with full CRUD demonstrating backend best practices." },
    tags: [".NET", "C#", "REST API"],
    github: "https://github.com/brunolopes9/netCRUD",
  },
  {
    title: "myTodo — Tarefas",
    description: { pt: "Gestor de tarefas com Redux Toolkit, Thunks assíncronos e REST API.", en: "Task manager with Redux Toolkit, async Thunks and REST API." },
    tags: ["React", "Redux", "Express"],
    github: "https://github.com/brunolopes9/myTodo",
  },
  {
    title: "TypingSpeed",
    description: { pt: "Teste de velocidade de escrita com medição de palavras por minuto em tempo real.", en: "Typing speed test with real-time words per minute measurement." },
    tags: ["JavaScript", "CSS"],
    link: "https://brunolopes9.github.io/TypingSpeed/",
    github: "https://github.com/brunolopes9/TypingSpeed",
  },
  {
    title: "TrainTwitter",
    description: { pt: "Clone simplificado do Twitter com funcionalidades de publicação e feed.", en: "Simplified Twitter clone with posting and feed features." },
    tags: ["JavaScript", "CSS"],
    link: "https://brunolopes9.github.io/TrainTwitter/",
    github: "https://github.com/brunolopes9/TrainTwitter",
  },
  {
    title: "MoonWalk",
    description: { pt: "Landing page temática com animações e design imersivo.", en: "Themed landing page with animations and immersive design." },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://brunolopes9.github.io/MoonWalk/",
    github: "https://github.com/brunolopes9/MoonWalk",
  },
  {
    title: "Clock",
    description: { pt: "Relógio digital interativo com design moderno.", en: "Interactive digital clock with modern design." },
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://brunolopes9.github.io/clock/",
    github: "https://github.com/brunolopes9/clock",
  },
];

const techStack = [
  { icon: SiDotnet, name: ".NET / C#", color: "text-purple-600" },
  { icon: SiReact, name: "React", color: "text-cyan-500" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { icon: SiPython, name: "Python", color: "text-yellow-500" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
  { icon: FaDatabase, name: "SQL Server", color: "text-red-600" },
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <img
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="w-full h-64 md:h-80 object-contain bg-gray-900"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow"
          >
            <FaChevronRight size={14} />
          </button>
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-blue-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Software() {
  const { lang, t } = useLanguage();
  const s = t("software");

  return (
    <section id="software" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">{s.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">{s.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">{s.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <Icon className={tech.color} size={20} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Featured project */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden mb-8 hover:shadow-lg transition-shadow">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-900 p-4 flex items-center">
              <ImageCarousel images={featuredProject.images} />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">{s.featured}</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{featuredProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">{featuredProject.description[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular projects - mobile: horizontal scroll */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
          {projects.map((project, i) => (
            <div key={i} className="min-w-[280px] snap-start md:min-w-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
              {project.image && (
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{project.description[lang]}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      <FaExternalLinkAlt size={11} /> {s.demo}
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                      <FaGithub size={14} /> {s.code}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto text-lg">{s.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento para desenvolvimento de software." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20">
              <FaWhatsapp size={22} /> {s.ctaWhatsapp}
            </a>
            <a href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento - Software"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
              <FaEnvelope size={20} /> {s.ctaEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
