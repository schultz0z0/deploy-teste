import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { MapPin, Star, Wifi, Coffee, Car } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const hotels = [
  {
    id: 1,
    name: "Grand Hyatt Rio de Janeiro",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    description: "Luxo e sofisticação à beira-mar na Barra da Tijuca. O hotel oficial do evento oferece estrutura completa de lazer e negócios.",
    location: "Barra da Tijuca, Rio de Janeiro",
    stars: 5,
    amenities: ["Wi-Fi Grátis", "Café da Manhã", "Transfer Evento", "Piscina"]
  },
  {
    id: 2,
    name: "Windsor Marapendi",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    description: "Localizado em frente à praia da Barra, oferece quartos modernos e uma vista deslumbrante. Excelente custo-benefício.",
    location: "Barra da Tijuca, Rio de Janeiro",
    stars: 4,
    amenities: ["Wi-Fi Grátis", "Academia", "Restaurante"]
  },
  {
    id: 3,
    name: "Hilton Barra",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    description: "Design contemporâneo e serviço de classe mundial. Próximo aos principais shoppings e centros de entretenimento.",
    location: "Barra da Tijuca, Rio de Janeiro",
    stars: 5,
    amenities: ["Wi-Fi Grátis", "Piscina no Terraço", "Transfer Evento"]
  },
  {
    id: 4,
    name: "Novotel Parque Olímpico",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop",
    description: "Opção prática e confortável, ideal para quem busca proximidade com o evento e facilidade de acesso.",
    location: "Barra da Tijuca, Rio de Janeiro",
    stars: 4,
    amenities: ["Wi-Fi Grátis", "Estacionamento", "Bar 24h"]
  }
];

export function Accommodation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Hospedagem" 
        description="Hotéis oficiais com tarifas exclusivas para participantes." 
      />
      
      <PageHeader 
        title="Hospedagem" 
        description="Garanta sua estadia nos hotéis oficiais com tarifas negociadas."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-brand-yellow shadow-sm">
                    <Star className="w-4 h-4 fill-current" />
                    {hotel.stars}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {hotel.location}
                  </div>
                  
                  <p className="text-slate-600 mb-6 flex-grow">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.map((amenity, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue/90 transition-colors shadow-md">
                    Reservar Agora
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
