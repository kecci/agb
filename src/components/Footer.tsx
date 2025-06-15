import React from 'react';
import { Fish, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Fish className="h-8 w-8 text-teal-400" />
              <div>
                <h3 className="text-2xl font-bold">Artha Global Bahari</h3>
                <p className="text-gray-400">Premium Indonesian Seafood</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading supplier of premium Indonesian seafood, connecting the pristine waters 
              of Indonesia's archipelago with customers worldwide since 1985.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">Jl. Pelabuhan Raya No. 123, Jakarta Utara, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">+62 21 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">info@arthaglobalbahari.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-teal-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-sm text-gray-400">6:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Saturday</p>
                  <p className="text-sm text-gray-400">6:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-sm text-gray-400">8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Artha Global Bahari. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}