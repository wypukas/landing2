<<<<<<< HEAD
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Star } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    time: "",
    service: "",
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast.error("Prašome sutikti su privatumo politika");
      return;
    }
    toast.success("Užklausa sėkmingai išsiųsta! Susisieksime su jumis per 1 darbo dieną.");
    setFormData({ name: "", email: "", phone: "", clinic: "", time: "", service: "", privacy: false });
  };

  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-orange-50/30">
=======
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-orange-50/30">
>>>>>>> origin/main
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1MTU0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dental clinic interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-24 relative z-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div>
            {/* Rating Badge */}
            <Badge variant="secondary" className="mb-8 bg-white border border-gray-200 px-5 py-3 rounded-full shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
                <span className="text-gray-700">4.9/5 – 99 % patenkintų pacientų</span>
              </div>
            </Badge>

            {/* Main Headline */}
            <h1 className="mb-6 text-gray-900 text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Sugrąžink šypseną – pavienė dantų implantacija vos per 3 mėnesius
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-gray-600 text-lg lg:text-xl leading-relaxed">
              Diagnostika tik <span className="text-[#FF7A00]">49 € vietoj 123 €</span>. 
              Greita, neskausminga ir su 5 metų garantija.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 text-lg flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FF7A00]/10 rounded-full flex items-center justify-center text-[#FF7A00] flex-shrink-0">✓</span>
                Nemokama gydytojo konsultacija su implantologu
              </li>
              <li className="text-gray-700 text-lg flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FF7A00]/10 rounded-full flex items-center justify-center text-[#FF7A00] flex-shrink-0">✓</span>
                5 metų garantija visam gydymui
              </li>
              <li className="text-gray-700 text-lg flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FF7A00]/10 rounded-full flex items-center justify-center text-[#FF7A00] flex-shrink-0">✓</span>
                Atsakymas per 1 valandą darbo metu
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="p-8 bg-white border-gray-200 shadow-2xl rounded-3xl">
            <h3 className="mb-6 text-gray-900 text-center">Registruokis nemokamai konsultacijai</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-gray-300"
                  placeholder="Jūsų vardas"
                />
              </div>

              <div>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-gray-300"
                  placeholder="Jūsų el. paštas"
                />
              </div>

              <div className="flex gap-2">
                <Select defaultValue="lt">
                  <SelectTrigger className="w-24 bg-white border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lt">🇱🇹 LT</SelectItem>
                    <SelectItem value="lv">🇱🇻 LV</SelectItem>
                    <SelectItem value="ee">🇪🇪 EE</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 bg-white border-gray-300"
                  placeholder="+370"
                />
              </div>

              <div>
                <Label htmlFor="clinic" className="text-gray-700 mb-2 block">
                  Pasirinkite Jums artimiausią kliniką
                </Label>
                <Select 
                  value={formData.clinic}
                  onValueChange={(value) => setFormData({ ...formData, clinic: value })}
                  required
                >
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue placeholder="Pasirinkite kliniką" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vilnius-zirmunai">Vilnius, Žirmūnai, Verkių g. 31D</SelectItem>
                    <SelectItem value="vilnius-centras">Vilnius, Centras, Gedimino pr. 1</SelectItem>
                    <SelectItem value="kaunas">Kaunas, Laisvės al. 50</SelectItem>
                    <SelectItem value="klaipeda">Klaipėda, Taikos pr. 20</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="time" className="text-gray-700 mb-2 block">
                  Pasirinkite Jums patogų laiką:
                </Label>
                <Select 
                  value={formData.time}
                  onValueChange={(value) => setFormData({ ...formData, time: value })}
                  required
                >
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue placeholder="Pasirinkite laiką" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Rytas (08:00-12:00)</SelectItem>
                    <SelectItem value="afternoon">Diena (12:00-16:00)</SelectItem>
                    <SelectItem value="evening">Vakaras (16:00-20:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="service" className="text-gray-700 mb-2 block">
                  Pasirinkite paslaugą:
                </Label>
                <Select 
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue placeholder="Pasirinkite paslaugą" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="implant">Dantų implantacija</SelectItem>
                    <SelectItem value="whitening">Dantų balinimas „Philips Zoom"</SelectItem>
                    <SelectItem value="consultation">Konsultacija</SelectItem>
                    <SelectItem value="other">Kita paslauga</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-gray-600">
                Su jumis susisieksime per 1 darbo dieną.
              </p>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#FF7A00] border-gray-300 rounded focus:ring-[#FF7A00]"
                  required
                />
                <Label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                  Perskaičiau ir sutinku su{" "}
                  <a href="#" className="text-[#FF7A00] hover:underline">
                    privatumo ir slapukų politika
                  </a>
                </Label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#E66D00] text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
              >
                Registruotis
              </Button>
            </form>
          </Card>
=======
      <div className="container mx-auto px-4 py-24 relative z-20 max-w-6xl">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <Badge variant="secondary" className="mb-8 bg-white border border-gray-200 px-5 py-3 rounded-full shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                ))}
              </div>
              <span className="text-gray-700">4.9/5 – 99 % patenkintų pacientų</span>
            </div>
          </Badge>

          {/* Main Headline */}
          <h1 className="mb-6 text-gray-900 text-5xl lg:text-6xl leading-tight">
            Sugrąžink šypseną – pavienė dantų implantacija vos per 3 mėnesius
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-gray-600 text-xl lg:text-2xl leading-relaxed">
            Diagnostika tik <span className="text-[#FF7A00]">49 € vietoj 123 €</span>. 
            Greita, neskausminga ir su 5 metų garantija.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              size="lg" 
              className="bg-[#FF7A00] hover:bg-[#E66D00] text-white px-10 py-7 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Registruokis diagnostikai
            </Button>
          </div>

          {/* Secondary Text */}
          <p className="text-gray-600 text-lg flex items-center gap-2">
            <span className="w-6 h-6 bg-[#FF7A00]/10 rounded-full flex items-center justify-center text-[#FF7A00]">✓</span>
            Nemokama gydytojo konsultacija su implantologu
          </p>
>>>>>>> origin/main
        </div>
      </div>
    </section>
  );
}
