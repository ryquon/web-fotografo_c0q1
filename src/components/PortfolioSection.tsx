
import { useState } from "react";

interface GalleryItem {
  id: number;
  category: string;
  src: string;
  alt: string;
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "retrato",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      alt: "Retrato profissional em ambiente natural",
    },
    {
      id: 2,
      category: "paisagem",
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      alt: "Vista aérea de montanhas verdes",
    },
    {
      id: 3,
      category: "evento",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      alt: "Evento corporativo tecnológico",
    },
    {
      id: 4,
      category: "retrato",
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80",
      alt: "Retrato artístico na natureza",
    },
    {
      id: 5,
      category: "paisagem",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      alt: "Montanhas cobertas de névoa ao amanhecer",
    },
    {
      id: 6,
      category: "evento",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      alt: "Evento de tecnologia com apresentação",
    },
  ];

  const filters = [
    { id: "all", label: "Todos" },
    { id: "retrato", label: "Retratos" },
    { id: "paisagem", label: "Paisagens" },
    { id: "evento", label: "Eventos" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-2 text-center">Portfólio</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Uma seleção dos meus melhores trabalhos em diferentes áreas da
          fotografia
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 text-sm rounded-full transition-all-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square overflow-hidden group relative cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <span className="uppercase tracking-wide text-sm">
                    {item.category === "retrato"
                      ? "Retrato"
                      : item.category === "paisagem"
                      ? "Paisagem"
                      : "Evento"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
