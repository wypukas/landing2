import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Ar implantacija skausminga?",
      answer: "Ne, procedūra atliekama vietinėje nejautroje, todėl jos metu nejaučiate skausmo. Po procedūros gali būti nedidelis diskomfortas, kurį lengvai malšina įprasti skausmą malšinantys vaistai. Dauguma pacientų teigia, kad procedūra buvo daug lengvesnė, nei tikėjosi."
    },
    {
      question: "Kiek trunka gijimas?",
      answer: "Tipinis gijimo laikotarpis yra 3-4 mėnesiai. Per šį laiką implantas natūraliai įauga į kaulo audinį (oseointegracijos procesas). Šiuo metu galite naudoti laikinąjį protezą, kad išlaikytumėte normalią kasdienybę ir estetiką."
    },
    {
      question: "Ar suteikiama garantija?",
      answer: "Taip, visiems implantams suteikiama 5 metų garantija. Garantija galioja, jei laikomasi gydytojo rekomendacijų ir atliekami reguliarūs profilaktiniai patikrinimai. Garantija netaikoma pacientams, turintiems bruksizmą ar onkologines ligas."
    },
    {
      question: "Kaip pasiruošti procedūrai?",
      answer: "Prieš procedūrą rekomenduojame gerai išsimiegoti, nesunkiai pavalgyti prieš kelias valandas ir vartoti įprastus vaistus (jei tokių vartojate). Venktina gerti alkoholį 24 valandas prieš procedūrą. Detalias instrukcijas gausite konsultacijos metu."
    },
    {
      question: "Kada galiu valgyti po implantacijos?",
      answer: "Po procedūros rekomenduojame palaukti 2-3 valandas, kol praeis vietinės nejautros poveikis. Pirmas 3-5 dienas venkite kietų, karštų ar labai aštrių maisto produktų. Pirmenybę teikite minkštam maistui ir vėsiems gėrimams. Po 1-2 savaičių galėsite grįžti prie įprasto mitybos režimo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center mb-4 text-gray-900">Dažniausiai užduodami klausimai</h2>
        <p className="text-center text-gray-600 mb-12">
          Turite daugiau klausimų? Susisiekite su mumis telefonu ar el. paštu
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#F9F9F9] border-none rounded-2xl px-6 hover:bg-gray-100 transition-colors"
            >
              <AccordionTrigger className="text-left text-gray-900 hover:text-[#FF7A00] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
