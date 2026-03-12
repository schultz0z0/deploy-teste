import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { useState } from 'react';
import { X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const images = [
  { id: 1, src: '/galeria/corretores_13_10_012_5380_©2017_HeusiAction-MiriamJeske.jpg', alt: 'Galeria 1' },
  { id: 2, src: '/galeria/corretores_13_10_168_6089_©2017_HeusiAction-MiriamJeske.jpg', alt: 'Galeria 2' },
  { id: 3, src: '/galeria/corretores_14_10_250_9601_All rights reserved.jpg', alt: 'Galeria 3' },
  { id: 4, src: '/galeria/corretores_14_10_328_0294_©2017_HeusiAction-MiriamJeske.jpg', alt: 'Galeria 4' },
  { id: 5, src: '/galeria/dia01_con_556.jpg', alt: 'Galeria 5' },
  { id: 6, src: '/galeria/dia01_con_592.jpg', alt: 'Galeria 6' },
  { id: 7, src: '/galeria/dia02_con_385.jpg', alt: 'Galeria 7' },
  { id: 8, src: '/galeria/dia02_con_388.jpg', alt: 'Galeria 8' },
  { id: 9, src: '/galeria/dia02_con_537.jpg', alt: 'Galeria 9' },
  { id: 10, src: '/galeria/dia03_con_244.jpg', alt: 'Galeria 10' },
  { id: 11, src: '/galeria/IMG_0782.JPG', alt: 'Galeria 11' },
  { id: 12, src: '/galeria/IMG_0879.JPG', alt: 'Galeria 12' },
  { id: 13, src: '/galeria/IMG_0916.JPG', alt: 'Galeria 13' },
  { id: 14, src: '/galeria/IMG_1089.JPG', alt: 'Galeria 14' },
  { id: 15, src: '/galeria/IMG_1527.JPG', alt: 'Galeria 15' },
  { id: 16, src: '/galeria/IMG_9927.JPG', alt: 'Galeria 16' },
  { id: 17, src: '/galeria/_DSC8617.JPG', alt: 'Galeria 17' }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Galeria de Fotos" 
        description="Confira os melhores momentos dos eventos anteriores." 
      />
      
      <PageHeader 
        title="Galeria de Fotos" 
        description="Reviva os grandes momentos das edições anteriores e prepare-se para o 24º Congresso."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="aspect-square cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-brand-yellow transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
