import { Award, Globe, Truck, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handpicked seafood meeting the highest international standards'
  },
  {
    icon: Truck,
    title: 'Fresh Delivery',
    description: 'Cold chain logistics ensuring freshness from sea to your table'
  },
  {
    icon: Users,
    title: 'Local Partnerships',
    description: 'Supporting Indonesian fishing communities for sustainable practices'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Exporting Indonesian seafood excellence worldwide'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Indonesia's Waters to the World
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over three decades, Artha Global Bahari has been Indonesia's trusted seafood supplier, 
              connecting the pristine waters of our beautiful archipelago with discerning customers worldwide. 
              Our commitment to quality, sustainability, and freshness has made us a leader in the Indonesian seafood industry.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We work directly with local fishing communities across Indonesia's 17,000 islands, 
              ensuring fair trade practices while maintaining the highest standards of seafood quality. 
              Every product in our catalog represents the rich marine biodiversity of Indonesian waters.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Partner Fishermen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}/images/pexels-energepic-com-27411-3650159.jpg`}
              alt="Indonesian fishermen"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Sustainable</div>
              <div className="text-sm">Fishing Practices</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}