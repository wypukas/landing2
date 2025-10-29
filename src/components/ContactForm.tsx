import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Užklausa sėkmingai išsiųsta! Susisieksime su jumis per 1 valandą.");
    setFormData({ name: "", phone: "", city: "" });
  };

  return (
    <section id="contact-form" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            Pradėkite savo naujos šypsenos kelionę šiandien
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Palikite kontaktus – susisieksime per 1 valandą darbo metu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white border-gray-200 shadow-lg rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">
                  Vardas, pavardė *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-gray-300"
                  placeholder="Pvz., Jonas Jonaitis"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                  Telefono numeris *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-gray-300"
                  placeholder="+370 600 00000"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-gray-700 mb-2 block">
                  Miestas *
                </Label>
                <Select 
                  value={formData.city}
                  onValueChange={(value) => setFormData({ ...formData, city: value })}
                  required
                >
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue placeholder="Pasirinkite miestą" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vilnius">Vilnius</SelectItem>
                    <SelectItem value="kaunas">Kaunas</SelectItem>
                    <SelectItem value="klaipeda">Klaipėda</SelectItem>
                    <SelectItem value="siauliai">Šiauliai</SelectItem>
                    <SelectItem value="panevezys">Panevėžys</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#E66D00] text-white py-7 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Siųsti užklausą
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Paspaudę „Siųsti" sutinkate, kad jūsų duomenys bus tvarkomi laikantis GDPR reikalavimų. 
                Jūsų duomenys bus naudojami tik konsultacijai organizuoti.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-gray-900">Susisiekite su mumis</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FF7A00]" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1">Telefonas</p>
                    <a href="tel:+37060000000" className="text-gray-900 hover:text-[#FF7A00]">
                      +370 600 00 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#FF7A00]" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1">El. paštas</p>
                    <a href="mailto:info@sypsenosakademija.lt" className="text-gray-900 hover:text-[#FF7A00]">
                      info@sypsenosakademija.lt
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF7A00]" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1">Adresas</p>
                    <p className="text-gray-900">Gedimino pr. 1, Vilnius</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#FF7A00]" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1">Darbo laikas</p>
                    <p className="text-gray-900">Pr-Pt: 8:00 - 20:00</p>
                    <p className="text-gray-900">Št: 9:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <Card className="p-6 bg-[#FF7A00]/10 border-[#FF7A00]/20 rounded-2xl">
              <h4 className="mb-3 text-gray-900">Greitas atsakymas garantuotas</h4>
              <p className="text-gray-700 leading-relaxed">
                Mūsų komanda atsakys į jūsų užklausą per 1 valandą darbo metu. 
                Būsite supažindinti su gydymo procesu ir gausite individualią kainų pasiūlymą.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
