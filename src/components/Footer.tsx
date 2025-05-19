const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">NOME</h2>
            <p className="text-white/80 mt-1">Fotógrafo Profissional</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-3">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-white transition-all-300">Início</a></li>
                <li><a href="#portfolio" className="text-white/70 hover:text-white transition-all-300">Portfólio</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-all-300">Sobre</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-all-300">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-3">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-all-300">Fotografia de Retrato</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-all-300">Eventos Corporativos</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-all-300">Casamentos</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-all-300">Fotografia Comercial</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} João Silva. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm mx-3 transition-all-300">Política de Privacidade</a>
            <a href="#" className="text-white/60 hover:text-white text-sm mx-3 transition-all-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;