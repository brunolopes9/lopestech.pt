import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
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
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
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
      </LanguageProvider>
    </ThemeProvider>
  );
}
