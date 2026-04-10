import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

function LegalModal({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
        >
          <FaTimes size={16} />
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 pr-12">
          {title}
        </h3>
        <div className="prose prose-sm max-w-none text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <footer className="bg-slate-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/sobre-mim/logo.jpg"
                  alt="LopesTech"
                  className="h-10 w-10 rounded-lg"
                />
                <span className="text-xl font-bold text-white">
                  Lopes<span className="text-blue-400">Tech</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Reparação de smartphones, desenvolvimento de software e venda de
                equipamentos novos com garantia. Viseu, Portugal.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.facebook.com/lopestech.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/lopestech.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/brunolopes9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-lg flex items-center justify-center transition"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://wa.me/351933938716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Reparação Smartphones
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Reparação Computadores
                  </a>
                </li>
                <li>
                  <a href="#software" className="hover:text-white transition">
                    Desenvolvimento Software
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Recuperação de Dados
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition">
                    Segurança Informática
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="hover:text-white transition">
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a href="#reparacoes" className="hover:text-white transition">
                    Portfolio Reparações
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="https://share.google/5tCfb4JNChIZEGHOu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Avaliar no Google
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.livroreclamacoes.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Livro de Reclamações
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setModal("privacidade")}
                    className="hover:text-white transition"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModal("cookies")}
                    className="hover:text-white transition"
                  >
                    Política de Cookies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModal("termos")}
                    className="hover:text-white transition"
                  >
                    Termos e Condições
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} LopesTech. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-500">
              Bruno Lopes | NIF: 263758141 | Viseu, Portugal
            </p>
          </div>
        </div>
      </footer>

      {modal === "privacidade" && (
        <LegalModal
          title="Política de Privacidade"
          onClose={() => setModal(null)}
        >
          <p>
            <strong>LopesTech</strong> compromete-se a proteger a privacidade dos
            seus utilizadores, em conformidade com o Regulamento Geral sobre a
            Proteção de Dados (RGPD - Regulamento UE 2016/679).
          </p>
          <h4>Dados Recolhidos</h4>
          <p>
            Recolhemos apenas os dados necessários para a prestação dos nossos
            serviços: nome, email, número de telefone e informações sobre o
            equipamento a reparar.
          </p>
          <h4>Finalidade</h4>
          <p>
            Os dados são utilizados exclusivamente para comunicação relacionada
            com os serviços solicitados, elaboração de orçamentos e gestão de
            reparações.
          </p>
          <h4>Conservação</h4>
          <p>
            Os dados pessoais são conservados pelo tempo necessário à prestação
            do serviço e cumprimento de obrigações legais (garantias, faturação).
          </p>
          <h4>Direitos do Titular</h4>
          <p>
            Tem direito a aceder, retificar, apagar e portabilizar os seus dados.
            Para exercer estes direitos, contacte geral@lopestech.pt.
          </p>
        </LegalModal>
      )}

      {modal === "cookies" && (
        <LegalModal
          title="Política de Cookies"
          onClose={() => setModal(null)}
        >
          <p>
            Este website utiliza apenas cookies técnicos essenciais ao seu
            funcionamento. Não utilizamos cookies de rastreamento ou publicidade.
          </p>
          <h4>O que são cookies?</h4>
          <p>
            Cookies são pequenos ficheiros de texto armazenados no seu
            dispositivo quando visita um website.
          </p>
          <h4>Cookies utilizados</h4>
          <p>
            Utilizamos apenas cookies estritamente necessários para o
            funcionamento do website. Estes cookies não recolhem informações
            pessoais identificáveis.
          </p>
        </LegalModal>
      )}

      {modal === "termos" && (
        <LegalModal
          title="Termos e Condições"
          onClose={() => setModal(null)}
        >
          <h4>Serviços de Reparação</h4>
          <p>
            Todos os orçamentos e diagnósticos são gratuitos. Sem reparação
            efetuada, não há custo para o cliente. Os preços apresentados são
            indicativos e podem variar conforme o modelo e estado do equipamento.
          </p>
          <h4>Garantia</h4>
          <p>
            Todas as reparações incluem garantia. O período de garantia varia
            conforme o tipo de reparação e é comunicado ao cliente no momento da
            entrega.
          </p>
          <h4>Responsabilidade</h4>
          <p>
            A LopesTech não se responsabiliza por danos pré-existentes não
            declarados no momento da entrega do equipamento. Todos os
            equipamentos são fotografados no momento de receção.
          </p>
          <h4>Desenvolvimento de Software</h4>
          <p>
            Os projetos de desenvolvimento são orçamentados caso a caso. Prazos
            e funcionalidades são acordados previamente por escrito.
          </p>
        </LegalModal>
      )}
    </>
  );
}
