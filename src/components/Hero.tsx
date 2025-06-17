import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-20 pb-12 md:pt-28 md:pb-20 bg-gradient-pastel"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-800">
                Deliciosos momentos{' '}
                <span className="text-pink-400">dulces</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Elaboramos pasteles artesanales con ingredientes frescos y mucho amor.
                Cada creación es única, como el momento que celebrás.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#productos"
                  className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition-all duration-300 text-center"
                >
                  Ver Productos
                </a>
                <a
                  href="#contacto"
                  className="px-6 py-3 border-2 border-pink-500 text-pink-500 font-semibold rounded-lg hover:bg-pink-100 transition-all duration-300 text-center"
                >
                  Contactar
                </a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" 
                  alt="Pastel decorado" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />

                <motion.img 
                  src="/images/porcion_peque.jpg" 
                  alt="Cupcakes decorados" 
                  className="absolute -bottom-12 -left-12 w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg border-4 border-white"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />

                <motion.img 
                  src="/images/porcion_peque2.jpg" 
                  alt="Dulces variados" 
                  className="absolute -top-8 -right-8 w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg border-4 border-white"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
