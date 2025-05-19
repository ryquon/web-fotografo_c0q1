
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-up">
          Capturando Momentos,
          <br /> Criando Memórias
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Fotógrafo profissional especializado em retratos, paisagens e eventos em São Paulo, Brasil
        </p>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-all-300"
      >
        <span className="mb-2 text-sm uppercase tracking-widest">Explorar</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
