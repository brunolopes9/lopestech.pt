import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Reparacoes from "./components/Reparacoes";
import VideoShowcase from "./components/VideoShowcase";
import Software from "./components/Software";
import SobreMim from "./components/SobreMim";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicos />
      <Reparacoes />
      <VideoShowcase />
      <Software />
      <SobreMim />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
