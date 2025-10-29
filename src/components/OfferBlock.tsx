import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

export function OfferBlock() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FF7A00]/5 to-orange-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* FOMO Banner */}
        <div className="text-center mb-6">
          <Badge className="bg-[#FF7A00] text-white px-6 py-3 rounded-full shadow-lg">
            <Clock className="w-4 h-4 mr-2 inline" />
            Tik iki mėnesio pabaigos!
          </Badge>
        </div>

        <h2 className="text-center mb-4 text-gray-900">Pasiūlymas šį mėnesį</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Išskirtinės kainos naujiems pacientams
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Offer */}
          <Card className="p-8 bg-white border-2 border-[#FF7A00] relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-3xl">
            {/* Best Value Badge */}
            <div className="absolute top-6 right-6">
              <Badge className="bg-[#FF7A00] text-white rounded-full px-4 py-1">Geriausias pasiūlymas</Badge>
            </div>

            <h3 className="mb-4 text-gray-900 mt-2">Danties implantacija</h3>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl text-[#FF7A00]">640 €</span>
                <span className="text-2xl text-gray-400 line-through">806 €</span>
              </div>
              <p className="text-gray-600">Sutaupote 166 €</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Chirurginė procedūra</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Implantas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gijimo galvutė</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">5 metų garantija</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-[#FF7A00] hover:bg-[#E66D00] text-white py-7 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Registruokis nemokamai konsultacijai
            </Button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Garantija taikoma neturintiems bruksizmo ar onkologinių ligų
            </p>
          </Card>

          {/* Diagnostic Offer */}
          <Card className="p-8 bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-3xl">
            <h3 className="mb-4 text-gray-900">Skaitmeninė diagnostika</h3>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl text-[#FF7A00]">49 €</span>
                <span className="text-2xl text-gray-400 line-through">123 €</span>
              </div>
              <p className="text-gray-600">Sutaupote 74 €</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Skaitmeninė rentgeno nuotrauka</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Konsultacija su implantologu</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Išsamus gydymo planas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Aiški kainos sąmata</span>
              </li>
            </ul>

            <Button 
              variant="outline"
              className="w-full border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00]/10 py-7 rounded-2xl text-lg transition-all"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Registruokis diagnostikai
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
