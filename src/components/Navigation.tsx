import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Smile, Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Smile className="w-9 h-9 text-[#FF7A00]" />
            <span className="text-xl text-gray-900">Šypsenos akademija</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
              Paslaugos
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
              Apie mus
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
              Kainos
            </a>
            <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
              Kontaktai
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#FF7A00] hover:bg-[#E66D00] text-white px-6 py-5 rounded-xl shadow-sm hover:shadow-md transition-all"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Registruokis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
                Paslaugos
              </a>
              <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
                Apie mus
              </a>
              <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
                Kainos
              </a>
              <a href="#" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
                Kontaktai
              </a>
              <Button 
                className="bg-[#FF7A00] hover:bg-[#E66D00] text-white w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Registruokis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
