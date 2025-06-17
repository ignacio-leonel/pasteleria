import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../data/products';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tortas':
        return 'bg-pastel-pink';
      case 'facturas':
        return 'bg-pastel-yellow';
      case 'pasteles':
        return 'bg-pastel-lilac';
      default:
        return 'bg-pastel-green';
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hola! Me interesa ordenar: ${product.name}`;
    const whatsappUrl = `https://wa.me/+5491112345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="card h-full flex flex-col"
      variants={variants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className={`absolute top-4 right-4 ${getCategoryColor(product.category)} px-3 py-1 rounded-full text-sm font-medium`}>
          {product.categoryName}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-montserrat font-semibold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-montserrat font-bold text-xl">${product.price}</span>
          <button 
            onClick={handleWhatsAppOrder}
            className="flex items-center gap-2 bg-pastel-green hover:bg-pastel-green-dark px-4 py-2 rounded-full transition-colors duration-300"
            aria-label="Ordenar por WhatsApp"
          >
            <ShoppingCart size={18} />
            <span>Ordenar</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;