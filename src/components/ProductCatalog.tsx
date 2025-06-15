import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Fresh Red Snapper (500-650G)',
    price: '$12.60/kg',
    image: `${import.meta.env.BASE_URL}/images/red-tilapia-min.jpg`,
    description: 'Premium red snapper caught fresh from Indonesian waters',
    rating: 5,
    category: 'Fish'
  },
  {
    id: 2,
    name: 'Cuttlefish / Sotong (Medium)',
    price: '$4.40/kg',
    image: `${import.meta.env.BASE_URL}/images/fresh-squid-min.jpg`,
    description: 'Fresh octopus with tender meat, perfect for various cuisines',
    rating: 5,
    category: 'Cuttlefish'
  },
  {
    id: 3,
    name: 'Spanish Mackerel / Tenggiri',
    price: '$14.40/kg',
    image: `${import.meta.env.BASE_URL}/images/delicious-white-tuna-recipe-still-life-top-view.jpg`,
    description: 'Sashimi-grade yellowfin tuna, sustainably caught',
    rating: 5,
    category: 'Fish'
  },
  {
    id: 4,
    name: 'Fresh Octopus',
    price: '$28.80/kg',
    image: `${import.meta.env.BASE_URL}/images/Local-Octopus.jpg`,
    description: 'Premium barramundi with delicate flavor and firm texture',
    rating: 5,
    category: 'Octopus'
  }
];

export default function ProductCatalog() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Seafood Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully selected range of the finest Indonesian seafood, 
            sourced directly from local fishermen and delivered fresh to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}