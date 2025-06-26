import React from 'react';

const PhotoGallerySection = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/428e58c0-0d9d-44dd-bdd2-95a3946cdfd7.png",
      alt: "Peregrinos en la Catedral de Santiago de Compostela",
      caption: "Llegada a Santiago de Compostela"
    },
    {
      src: "/lovable-uploads/99c7f03f-73fc-4629-b741-6926010c5655.png", 
      alt: "Peregrinos abrazándose al finalizar el Camino",
      caption: "a veces sobran las palabras"
    }
  ];

  return (
    <section className="py-20 bg-camino-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            El Camino en{' '}
            <span className="text-camino-green">imágenes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los momentos más especiales que vivirás en tu experiencia del Camino de Santiago
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Únete a miles de peregrinos que ya han vivido esta{' '}
            <span className="text-camino-green font-semibold">experiencia transformadora</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
