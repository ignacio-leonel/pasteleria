import React from 'react';
import { Cake } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Cake className="text-pastel-pink-dark mr-2" size={28} />
      <span className="font-montserrat font-bold text-xl md:text-2xl">
        Dulce
        <span className="text-pastel-pink-dark">Pastelería</span>
      </span>
    </div>
  );
};

export default Logo;