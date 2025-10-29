import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, Layers, Timer, Smile, ChevronDown } from "lucide-react";

export function ProcessTimeline() {
  const [showDetails, setShowDetails] = useState(false);

  const steps = [
    {
      icon: Search,
      title: "Diagnostika",
      short: "Skaitmeninė rentgenogramų analizė",
      detailed: "Atlikome išsamų dantų ir žandikaulių būklės įvertinimą naudojant moderniausią skaitmeninę įrangą. Nustatome gydymo planą ir suderinme kainą."
    },
    {
      icon: Layers,
      title: "Implantavimas",
      short: "Greita ir neskausminga procedūra",
      detailed: "Vietinėje nejautroje įdedame titano implantą į žandikaulį. Procedūra trunka apie 30-60 minučių. Patirtis ir tikslumas – svarbiausi mūsų prioritetai."
    },
    {
      icon: Timer,
      title: "Gijimas",
      short: "3–4 mėn. natūraliam įaugimui",
      detailed: "Implantas natūraliai įauga į kaulo audinį (oseointegracijos procesas). Šiuo metu galite naudoti laikinąjį protezą, kad išlaikytumėte estetinį vaizdą."
    },
    {
      icon: Smile,
      title: "Protezavimas",
      short: "Galutinė nuolatinė karūnėlė",
      detailed: "Ant įaugusio implanto tvirtinama nuolatinė keramikinė karūnėlė, atitinkanti jūsų natūralių dantų spalvą ir formą. Rezultatas – natūrali šypsena!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center mb-4 text-gray-900">Kaip vyksta dantų atstatymas?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Paprastas ir aiškus procesas, lydimas mūsų specialistų kiekviename etape
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <div className="absolute inset-0 bg-[#FF7A00] rounded-full" style={{ width: '75%' }}></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative rounded-2xl">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-[#FF7A00]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-10 h-10 text-[#FF7A00]" />
                </div>

                {/* Content */}
                <h3 className="text-center mb-3 text-gray-900">{step.title}</h3>
                <p className="text-center text-gray-600 mb-3 leading-relaxed">{step.short}</p>

                {showDetails && (
                  <p className="text-center text-gray-500 text-sm border-t border-gray-100 pt-4 mt-4 leading-relaxed">
                    {step.detailed}
                  </p>
                )}
              </Card>
            ))}
          </div>

          {/* Toggle Details Button */}
          <div className="text-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowDetails(!showDetails)}
              className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00]/10 rounded-full px-6 py-6"
            >
              {showDetails ? "Slėpti detalesnę eigą" : "Rodyti detalesnę eigą"}
              <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
