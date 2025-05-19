import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl mb-6">Sobre Mim</h2>
            <p className="mb-4 text-muted-foreground">Olá! seu nome, fotógrafo profissional com mais de 10 anos de experiência capturando momentos e criando memórias visuais inesquecíveis.</p>
            <p className="mb-4 text-muted-foreground">
              Minha paixão pela fotografia começou na adolescência quando ganhei minha primeira câmera. 
              Desde então, venho aprimorando minhas habilidades e desenvolvendo um estilo único que
              mistura o clássico com o contemporâneo.
            </p>
            <p className="mb-6 text-muted-foreground">
              Especializei-me em fotografia de retratos, paisagens e eventos. Trabalho com clientes 
              em todo o Brasil, ajudando-os a contar suas histórias através de imagens impactantes.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                Entre em Contato
              </Button>
              <Button variant="outline">Ver mais trabalhos</Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&q=80" alt="João Silva - Fotógrafo" className="rounded-md w-full max-w-md object-cover" style={{
              height: "500px"
            }} />
              <div className="absolute -bottom-5 -left-5 bg-black text-white p-4 rounded-md">
                <p className="font-bold">10+ Anos</p>
                <p className="text-sm">de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;