import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaWhatsapp, FaEnvelope, FaChevronLeft, FaChevronRight, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiTypescript, SiTailwindcss, SiReact, SiMongodb, SiPython } from "react-icons/si";

const featuredProject = {
  title: "eBL Middleware — Blockchain & Digital Supply Chain",
  description:
    "Sistema middleware empresarial que revoluciona o transporte marítimo ao digitalizar os Bill of Lading (BL) para Electronic Bill of Lading (EBL) na blockchain. Elimina os BLs em papel — cada edição, transferência ou aprovação de levantamento é registada de forma imutável e rastreável. As empresas (carriers, shippers, consignees) têm contratos e carteiras na blockchain, garantindo segurança, confiança e rapidez em cada operação. Cada EBL recebe um token ID único, assegurando total transparência na digital supply chain. Um passo decisivo na transição para o Web3 nos transportes internacionais.",
  tags: [".NET 10", "React", "SQL Server", "Blockchain", "Web3", "Python"],
  images: ["/assets/projetos/blockchain1.png", "/assets/projetos/blockchain2.png", "/assets/projetos/blockchain3.png"],
};

const projects = [
  {
    title: "NextHire — Portal de Emprego",
    description: "Portal de emprego full-stack MERN. Employers publicam vagas, candidatos pesquisam e gerem candidaturas.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    link: "https://next-hire-ashen.vercel.app",
    github: "https://github.com/brunolopes9/NextHire",
    image: "https://raw.githubusercontent.com/brunolopes9/NextHire/main/frontend/NextHire/public/1.png",
  },
  {
    title: "RankingApp — Classificador Interativo",
    description: "Aplicação interativa com drag & drop para classificar filmes ou álbuns. Full-stack com React e ASP.NET Core.",
    tags: ["React", "ASP.NET Core", "C#", "Tailwind CSS"],
    github: "https://github.com/brunolopes9/rankingApp",
    image: "https://raw.githubusercontent.com/brunolopes9/rankingApp/main/rankingapp.client/public/RankingApp1.png",
  },
  {
    title: "SimpleShop — E-Commerce",
    description: "E-commerce com múltiplas bases de dados: MySQL, MongoDB e Redis. Segurança com Argon2.",
    tags: ["Fastify", "MySQL", "MongoDB", "Redis"],
    github: "https://github.com/brunolopes9/SimpleShop",
    image: "https://raw.githubusercontent.com/brunolopes9/SimpleShop/main/public/1.png",
  },
  {
    title: "BLE Tracking System",
    description: "Sistema de rastreamento industrial com BLE. Projeto em parceria com HUF Portuguesa.",
    tags: ["Node.js", "PHP", "MQTT", "BLE"],
    github: "https://github.com/brunolopes9/ble_tracking_system",
  },
  {
    title: "BrunoFolio — Portfólio",
    description: "Portfólio pessoal moderno com dark mode, animações e formulário de contacto com API.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://bruno-folio-8y1g.vercel.app/",
    github: "https://github.com/brunolopes9/BrunoFolio",
  },
  {
    title: "DevLinks — Cartão Digital",
    description: "Cartão de visitas digital interativo com links para redes sociais e contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://brunolopes9.github.io/DevLinks/",
    github: "https://github.com/brunolopes9/DevLinks",
  },
  {
    title: "Bulky MVC — Gestão",
    description: "Aplicação MVC para gestão de produtos com CRUD completo e autorização por roles.",
    tags: ["ASP.NET Core", "C#", "SQL Server"],
    github: "https://github.com/brunolopes9/Bulky_MVC",
  },
  {
    title: "netCRUD — API REST",
    description: "API RESTful com CRUD completo demonstrando boas práticas de backend.",
    tags: [".NET", "C#", "REST API"],
    github: "https://github.com/brunolopes9/netCRUD",
  },
  {
    title: "myTodo — Tarefas",
    description: "Gestor de tarefas com Redux Toolkit, Thunks assíncronos e REST API.",
    tags: ["React", "Redux", "Express"],
    github: "https://github.com/brunolopes9/myTodo",
  },
  {
    title: "TypingSpeed",
    description: "Teste de velocidade de escrita com medição de palavras por minuto em tempo real.",
    tags: ["JavaScript", "CSS"],
    github: "https://github.com/brunolopes9/TypingSpeed",
  },
  {
    title: "TrainTwitter",
    description: "Clone simplificado do Twitter com funcionalidades de publicação e feed.",
    tags: ["JavaScript", "CSS"],
    github: "https://github.com/brunolopes9/TrainTwitter",
  },
  {
    title: "MoonWalk",
    description: "Landing page temática com animações e design imersivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/brunolopes9/MoonWalk",
  },
  {
    title: "Clock",
    description: "Relógio digital interativo com design moderno.",
    tags: ["HTML", "CSS", "JavaScript"],
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
  return (
    <section id="software" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Desenvolvimento</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">Software & Projetos</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Projetos de software desenvolvidos com tecnologias modernas e as melhores práticas da indústria.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200">
                <Icon className={tech.color} size={20} />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Featured project - lovable style */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8 hover:shadow-lg transition-shadow">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-900 p-4 flex items-center">
              <ImageCarousel images={featuredProject.images} />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase mb-2">Projeto em destaque</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredProject.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all group">
              {project.image && (
                <div className="aspect-video overflow-hidden bg-gray-100">
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800">
                      <FaExternalLinkAlt size={11} /> Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-800">
                      <FaGithub size={14} /> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-lg">
            Precisa de um website, aplicação ou software à medida? Fale comigo e encontramos a solução ideal para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/351933938716?text=Olá! Gostaria de pedir um orçamento para desenvolvimento de software." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20">
              <FaWhatsapp size={22} /> Software à Medida - WhatsApp
            </a>
            <a href="mailto:contacto@lopestech.pt?subject=Pedido de Orçamento - Software"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
              <FaEnvelope size={20} /> Software à Medida - Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
