import { Smile, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Smile className="w-8 h-8 text-[#FF7A00]" />
              <span className="text-2xl">Šypsenos akademija</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modernus odontologijos centras, specializuojantis dantų implantacijoje. 
              30+ metų patirtis ir tūkstančiai patenkintų pacientų.
            </p>
            <p className="text-gray-500 mb-6">Sekite mus socialiniuose tinkluose</p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF7A00] transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF7A00] transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF7A00] transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6">Nuorodos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF7A00] transition-colors">Apie mus</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A00] transition-colors">Paslaugos</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A00] transition-colors">Kainos</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A00] transition-colors">Kontaktai</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6">Kontaktai</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+37060000000" className="hover:text-[#FF7A00] transition-colors">
                  +370 600 00 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@sypsenosakademija.lt" className="hover:text-[#FF7A00] transition-colors">
                  info@sypsenosakademija.lt
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Gedimino pr. 1, Vilnius</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Šypsenos akademija. Visos teisės saugomos.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-[#FF7A00] transition-colors">Privatumo politika</a>
            <a href="#" className="hover:text-[#FF7A00] transition-colors">Naudojimo taisyklės</a>
            <a href="#" className="hover:text-[#FF7A00] transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
