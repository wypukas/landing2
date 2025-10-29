import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Jurgita M.",
      rating: 5,
      text: "Visas procesas vyko be skausmo, profesionaliai ir aiškiai. Rekomenduoju!",
      date: "Prieš 2 savaites"
    },
    {
      name: "Tomas K.",
      rating: 5,
      text: "Po daugelio metų vėl galiu šypsotis be gėdos. Ačiū už kokybišką darbą ir rūpestį!",
      date: "Prieš 1 mėnesį"
    },
    {
      name: "Rasa P.",
      rating: 5,
      text: "Buvau labai nerami prieš procedūrą, bet daktaras viską išaiškino ir nuramino. Rezultatas pranoko lūkesčius!",
      date: "Prieš 3 savaites"
    },
    {
      name: "Mindaugas L.",
      rating: 5,
      text: "Viskas vyko sklandžiai, be skausmo – rekomenduoju 100 %! Komanda labai profesionali ir dėmesinga.",
      date: "Prieš 1 savaitę"
    }
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center mb-4 text-gray-900">Pacientų atsiliepimai</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Daugiau nei 500 sėkmingai atstatytų šypsenų per pastaruosius metus
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative rounded-2xl">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FF7A00]/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 italic leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-12 pt-8">
          <div className="text-center">
            <p className="text-4xl text-[#FF7A00] mb-2">500+</p>
            <p className="text-gray-600">Atliktų implantacijų</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[#FF7A00] mb-2">30+</p>
            <p className="text-gray-600">Metų patirtis</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[#FF7A00] mb-2">99%</p>
            <p className="text-gray-600">Pasitenkinimo lygis</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[#FF7A00] mb-2">4.9/5</p>
            <p className="text-gray-600">Vidutinis įvertinimas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
