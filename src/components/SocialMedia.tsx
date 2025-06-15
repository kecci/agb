import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';

const socialLinks = [
  {
    platform: 'Instagram',
    icon: Instagram,
    username: '@arthaglobalbahari',
    followers: '5.4K',
    description: 'Daily fresh catches and behind-the-scenes content',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    url: 'https://instagram.com/arthaglobalbahari/'
  },
  {
    platform: 'Facebook',
    icon: Facebook,
    username: 'Artha Global Bahari',
    followers: '2.5K',
    description: 'Company updates and seafood recipes',
    color: 'bg-blue-600',
    url: 'https://www.facebook.com/profile.php?id=61577333574840'
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    username: 'Artha Global Bahari',
    followers: '3.8K',
    description: 'Fishing documentaries and cooking tutorials',
    color: 'bg-red-600',
    url: 'https://instagram.com/arthaglobalbahari/'
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    username: 'Artha Global Bahari',
    followers: '1.3K',
    description: 'Industry insights and business updates',
    color: 'bg-blue-700',
    url: 'https://www.linkedin.com/company/107513466/'
  },
  {
    platform: 'WhatsApp',
    icon: MessageCircle,
    username: '+62 856-1254-058',
    followers: 'Direct Contact',
    description: 'Quick inquiries and customer support',
    color: 'bg-green-500',
    url: 'https://api.whatsapp.com/send?phone=628561254058&text=Hi%20AGB%20Team%2C%20I%27m%20%3Cname%3E%20from%20%3Ccompany%2Fcountry%3E%0A%0AI%20want%20to%20order%20%3Cfrozen%2Ffresh%3E%20products%3A%0A1.%20Octopus%20Grade%20A%3D500kg%0A2.%20Mackerel%20Size%202UP%3D1000kg%0A3.%20...%0A%0ADestination%3A%20%3Ccity%2C%20country%3E'
  }
];

export default function SocialMedia() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest catches, fishing stories, and seafood insights. 
            Follow us on social media for daily updates from the Indonesian seas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 p-6 text-center"
            >
              <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <social.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{social.platform}</h3>
              <p className="text-sm text-gray-600 mb-2">{social.username}</p>
              <p className="text-sm font-semibold text-blue-600 mb-3">{social.followers}</p>
              <p className="text-xs text-gray-500">{social.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Seafood Community
            </h3>
            <p className="text-gray-600 mb-6">
              Get exclusive access to special offers, new product launches, and seafood cooking tips. 
              Subscribe to our newsletter for the latest updates from Artha Global Bahari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                disabled
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}