import { Card } from "./ui/card";
import { Shield, CheckCircle2 } from "lucide-react";

export function AboutService() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Description */}
          <div>
            <h2 className="mb-6 text-gray-900">Apie pavienę implantaciją</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Puiki išeitis nepataisomai sugedus vienam ar keliems dantims. 
              Implantuojama į ką tik pašalinto danties vietą, todėl maksimaliai 
              sumažinamas gijimo laikas.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Natūralus ir ilgalaikis sprendimas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Išsaugo gretimus dantis sveikas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Grąžina visas kramtymo funkcijas</span>
              </li>
            </ul>
          </div>

          {/* Right - Stylized Implant Illustration */}
          <div className="bg-gradient-to-br from-[#FF7A00]/5 to-orange-50 rounded-3xl p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-gray-900 mb-2">Kokybė ir Patvarumas</h3>
              <p className="text-gray-600">Titano implantai su garantija</p>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <Card className="bg-gradient-to-r from-[#FF7A00]/10 to-orange-50/50 border-[#FF7A00]/20 p-8 lg:p-12 rounded-3xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-[#FF7A00] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="mb-3 text-gray-900">Apie garantiją – ką nutyli kitos klinikos</h3>
              <p className="text-gray-700 text-lg">
                Suteikiame <span className="text-[#FF7A00]">5 metų pilną garantiją</span> – 
                nuo operacijos iki protezo. Skirtingai nei daugelis kitų klinikų, mes garantuojame 
                ne tik implantą, bet ir visą gydymo procesą bei galutinį rezultatą.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
