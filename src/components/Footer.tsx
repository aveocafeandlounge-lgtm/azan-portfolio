import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy dark:bg-navy-light text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Mohamed Azan Abdul Rahman</h3>
            <p className="text-gray-400 text-sm">
              Student Leader | Academic Achiever | Technology Enthusiast
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="/achievements" className="hover:text-gold transition-colors">Achievements</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:mohamed.azan.ar@gmail.com" className="hover:text-gold transition-colors">
                  mohamed.azan.ar@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+9609303223" className="hover:text-gold transition-colors">
                  +960 9303223
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ma. Dhanas, Malé</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohamed Azan Abdul Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
