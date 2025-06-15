import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-medium">Top Rated Fresh Fish & Seafood from Indonesia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fresh Indonesian
            <span className="block text-teal-300">Seafood</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            From the pristine waters of Indonesia's archipelago to your table. 
            Experience the finest selection of fresh fish, octopus, and premium seafood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:transform hover:scale-105">
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
            <a href="#contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}