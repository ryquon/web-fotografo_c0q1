import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ChevronRight } from "lucide-react";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };
  return <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-2 text-center">Entre em Contato</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Estou disponível para novos projetos e colaborações. Vamos criar algo incrível juntos!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-secondary p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium">
                  Nome
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-sm font-medium">
                  Telefone
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">
                  Mensagem
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Como posso ajudar você?" rows={4} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl mb-4">Informações de Contato</h3>
              <p className="text-muted-foreground mb-8">
                Estou disponível para sessões fotográficas em São Paulo e região,
                ou posso viajar para projetos específicos em outras localidades.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contato@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium">(11) 99999-9999</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h3 className="text-xl mb-4">Siga nas redes sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-secondary hover:bg-secondary/80 transition-all-300 p-3 rounded-full" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-secondary hover:bg-secondary/80 transition-all-300 p-3 rounded-full" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-secondary hover:bg-secondary/80 transition-all-300 p-3 rounded-full" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;