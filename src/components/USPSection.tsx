import { Card } from "./ui/card";
import { Users, Clock, Award, HeartHandshake } from "lucide-react";
import comparisonChart from "figma:asset/6ea775f0de678a158a71f75e5be052ddc8d671ab.png";

export function USPSection() {
  const benefits = [
    {
      icon: Users,
      title: "99 % pacientų rinktųsi mus vėl",
      description: "Aukščiausias klientų pasitenkinimas"
    },
    {
      icon: Clock,
      title: "Greiti vizitai be laukimo",
      description: "Patogus laikas jums"
    },
    {
      icon: Award,
      title: "30+ metų patirtis implantacijos srityje",
      description: "Patikimi specialistai"
    },
    {
      icon: HeartHandshake,
      title: "Asmeninė vadyba viso gydymo metu",
      description: "Rūpinamės jumis kiekvieną žingsnį"
    }
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center mb-4 text-gray-900">Kodėl turėčiau rinktis Šypsenos akademiją?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Skirtingai nei daugelis klinikų, mes užtikriname visapusišką rūpestį ir aiškumą
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left - Comparison Chart Image */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white border-gray-200 p-6 rounded-3xl shadow-lg overflow-hidden">
              <img
                src={comparisonChart}
                alt="Kodėl turėčiau rinktis Šypsenos akademija?"
                className="w-full h-auto"
              />
            </Card>
          </div>

          {/* Right - USP List */}
          <div className="order-1 lg:order-2 space-y-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#FF7A00]/30 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#FF7A00]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-[#FF7A00]" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
