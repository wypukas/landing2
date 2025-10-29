import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DoctorsSection() {
  const doctors = [
    {
      name: "Aidas Ligutis",
      specialty: "Vyr. implantuojantis gydytojas",
      image: "https://offer.sypsenosakademija.lt/wp-content/uploads/2024/05/Gydytojas-odontologas-aidas-ligutis-400x400-1-1.webp",
      tagline: "30+ metų patirtis implantacijoje"
    },
    {
      name: "David Kasradze",
      specialty: "Odontologas implantologas",
      image: "https://offer.sypsenosakademija.lt/wp-content/uploads/2024/05/DAVID-KASRADZE-400x400-1-1.webp",
      tagline: "Specializacija sudėtingose procedūrose"
    },
    {
      name: "Rokas Gelažius",
      specialty: "Odontologas chirurgas",
      image: "https://offer.sypsenosakademija.lt/wp-content/uploads/2024/05/ROKAS-GALAZIUS-400x400-1-1.webp",
      tagline: "Tikslumas ir dėmesys detalėms"
    },
    {
      name: "Jolanta Buinovska",
      specialty: "Odontologė implantologė",
      image: "https://offer.sypsenosakademija.lt/wp-content/uploads/2024/05/jolanta-buinovska-400x400-1-1.webp",
      tagline: "Individualus požiūris kiekvienam pacientui"
    }
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">Mūsų gydytojai</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Patyrę specialistai su daugiau nei 30 metų praktikos implantacijos srityje
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
            >
              {/* Doctor Image */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="mb-1 text-gray-900">{doctor.name}</h3>
                <p className="text-[#FF7A00] mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm">{doctor.tagline}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Trust Element */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-white border-gray-200 px-8 py-4 rounded-2xl shadow-sm">
            <p className="text-gray-700">
              <span className="text-[#FF7A00]">500+</span> sėkmingų implantacijų kasmet
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
