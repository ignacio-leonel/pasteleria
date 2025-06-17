import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from './ProductCard';
import { products, ProductCategory } from '../data/products';

const Products: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'tortas', name: 'Tortas' },
    { id: 'facturas', name: 'Facturas' },
    { id: 'pasteles', name: 'Pasteles' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section
      id="productos"
      className="py-16 md:py-24 bg-pastel-yellow/20"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros <span className="gradient-text">Productos</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-pastel-lilac text-gray-800 shadow-md'
                  : 'bg-white/80 hover:bg-pastel-pink/30 text-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id as ProductCategory)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;