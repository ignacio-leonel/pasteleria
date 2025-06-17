import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-header py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo />
          
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-pastel-pink-dark hover:text-pastel-lilac-dark transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-pastel-pink-dark hover:text-pastel-lilac-dark transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            
          </div>
        
        
        
         
        </div>
        
        <div className="border-t border-pastel-pink/30 pt-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Dulce Pastelería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;