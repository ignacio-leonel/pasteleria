import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Contáctanos</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          
          
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="font-montserrat font-semibold text-2xl mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pastel-lilac/30 p-3 rounded-full">
                    <MapPin className="text-pastel-lilac-dark" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg">Ubicación</h4>
                    <p className="text-gray-600">Av. Rivadavia 1234, Buenos Aires</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pastel-pink/30 p-3 rounded-full">
                    <Phone className="text-pastel-pink-dark" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg">Teléfono</h4>
                    <p className="text-gray-600">+54 11 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pastel-green/30 p-3 rounded-full">
                    <Mail className="text-pastel-green-dark" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600">info@dulcepasteleria.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pastel-yellow/30 p-3 rounded-full">
                    <Clock className="text-pastel-yellow-dark" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg">Horario</h4>
                    <p className="text-gray-600">Lunes a Sábado: 9:00 - 20:00</p>
                    <p className="text-gray-600">Domingo: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.18697573374!2d-58.45154233183088!3d-34.60373871559219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2s!4v1662598733212!5m2!1ses!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la pastelería"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;