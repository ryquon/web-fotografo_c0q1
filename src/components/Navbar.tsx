import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [{
    name: "Início",
    href: "#home"
  }, {
    name: "Portfólio",
    href: "#portfolio"
  }, {
    name: "Sobre",
    href: "#about"
  }, {
    name: "Contato",
    href: "#contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all-300 py-4 px-6 md:px-10 flex items-center justify-between ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <a href="#home" className="text-xl md:text-2xl font-bold">NOME
    </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navItems.map(item => <a key={item.name} href={item.href} className="text-sm uppercase tracking-wide hover:text-black/60 transition-all-300">
            {item.name}
          </a>)}
      </nav>

      {/* Contact Button - Desktop */}
      <Button className="hidden md:flex" variant="outline" size="sm" onClick={() => {
      document.getElementById("contact")?.scrollIntoView();
    }}>
        Agendar Sessão
      </Button>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <div className="flex flex-col gap-1.5">
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white flex flex-col justify-center items-center md:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <nav className="flex flex-col gap-10 items-center">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-xl uppercase tracking-wide hover:text-black/60 transition-all-300" onClick={() => setMobileMenuOpen(false)}>
              {item.name}
            </a>)}
          <Button variant="outline" size="lg" onClick={() => {
          document.getElementById("contact")?.scrollIntoView();
          setMobileMenuOpen(false);
        }}>
            Agendar Sessão
          </Button>
        </nav>
      </div>
    </header>;
};
export default Navbar;