import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351933938716?text=Olá! Gostaria de saber mais sobre os vossos serviços."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Contactar via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
