import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featureItems = [
    {
      icon: <Leaf className="text-pastel-green-dark" size={32} />,
      title: 'Ingredientes Naturales',
      description: 'Utilizamos solo ingredientes frescos y naturales en todas nuestras creaciones.',
    },
    {
      icon: <Award className="text-pastel-pink-dark" size={32} />,
      title: 'Calidad Artesanal',
      description: 'Cada producto es elaborado a mano con dedicación y técnicas tradicionales.',
    },
    {
      icon: <Clock className="text-pastel-lilac-dark" size={32} />,
      title: 'Frescura Garantizada',
      description: 'Horneamos diariamente para asegurar que recibas lo más fresco.',
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-16 md:py-24 bg-white"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title mb-12">
          Sobre <span className="text-pink-400">Nosotros</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-pastel-lilac rounded-lg transform rotate-3"></div>
              <img
                src="/images/decorada.jpg"
                alt="Nuestro equipo de pastelería"
                className="relative rounded-lg shadow-lg w-full h-auto z-10"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="font-montserrat font-semibold text-2xl md:text-3xl mb-4">
              Nuestra Historia
            </h3>
            <p className="mb-4 text-gray-700">
              Desde 2015, Dulce Pastelería ha estado creando momentos especiales a través de nuestras deliciosas creaciones.
              Nacimos con la pasión de convertir ingredientes simples en experiencias extraordinarias.
            </p>
            <p className="mb-6 text-gray-700">
              Nuestra filosofía se basa en tres pilares fundamentales: calidad superior en cada ingrediente,
              técnicas artesanales perfeccionadas con el tiempo, y un toque de creatividad que hace único cada producto.
            </p>
            <a href="#productos" className="btn-primary inline-block">
              Descubre nuestros productos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-pastel-yellow/20 p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
