export type ProductCategory = 'all' | 'tortas' | 'facturas' | 'pasteles';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  categoryName: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Torta de Chocolate y Frambuesa',
    description: 'Deliciosa torta de chocolate negro con relleno de frambuesas frescas y crema suave.',
    price: 4500,
    category: 'tortas',
    categoryName: 'Torta',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
  },
  {
    id: '2',
    name: 'Torta de Vainilla y Frutas',
    description: 'Bizcocho de vainilla con crema y una selección de frutas frescas de temporada.',
    price: 4200,
    category: 'tortas',
    categoryName: 'Torta',
    image: '/images/frutal.jpg',
  },
  {
    id: '3',
    name: 'Facturas Surtidas',
    description: 'Media docena de facturas variadas: vigilantes, cañoncitos de dulce de leche y medialunas.',
    price: 1800,
    category: 'facturas',
    categoryName: 'Facturas',
    image: '/images/facturas6.jpg',
  },
  {
    id: '4',
    name: 'Medialunas de Manteca',
    description: 'Docena de medialunas de manteca, perfectas para el desayuno o la merienda.',
    price: 2200,
    category: 'facturas',
    categoryName: 'Facturas',
    image: '/images/medialunasmanteca.jpg',
  },
  {
    id: '5',
    name: 'Pastel de Limón',
    description: 'Pastel fresco de limón con base de galleta y terminación de merengue italiano.',
    price: 3800,
    category: 'pasteles',
    categoryName: 'Pastel',
    image: '/images/lemonpie.jpg',
  },
  {
    id: '6',
    name: 'Cupcakes Decorados',
    description: 'Pack de 6 cupcakes decorados con buttercream en colores pasteles.',
    price: 2500,
    category: 'pasteles',
    categoryName: 'Pastel',
    image: '/images/cupcakes.jpg',
  },
];