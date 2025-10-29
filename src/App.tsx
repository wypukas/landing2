import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { USPSection } from "./components/USPSection";
import { AboutService } from "./components/AboutService";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { OfferBlock } from "./components/OfferBlock";
import { DoctorsSection } from "./components/DoctorsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FAQSection } from "./components/FAQSection";
<<<<<<< HEAD
=======
import { ContactForm } from "./components/ContactForm";
>>>>>>> origin/main
import { Footer } from "./components/Footer";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navigation />
      
      {/* Main Content - Add padding top to account for fixed nav */}
      <main className="pt-16">
<<<<<<< HEAD
        {/* Hero with Contact Form */}
=======
        {/* Hero */}
>>>>>>> origin/main
        <HeroSection />
        
        {/* USP */}
        <USPSection />
        
        {/* About */}
        <AboutService />
        
        {/* Process */}
        <ProcessTimeline />
        
        {/* Offer */}
        <OfferBlock />
        
        {/* Doctors */}
        <DoctorsSection />
        
        {/* Reviews */}
        <ReviewsSection />
        
        {/* FAQ */}
        <FAQSection />
<<<<<<< HEAD
=======
        
        {/* Form */}
        <ContactForm />
>>>>>>> origin/main
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
