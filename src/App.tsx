import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { InteriorGallery } from './components/InteriorGallery';
import { Interior3DExperience } from './components/Interior3DExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export function App() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#151C28] selection:bg-[#0B1B3D] selection:text-[#DFB13C] flex flex-col w-full relative">
      {/* 1. Navigation */}
      <Navbar onEnquireClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section with 3D Architectural Model */}
        <Hero onExploreClick={scrollToServices} onTalkClick={scrollToContact} />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section (6 Cards) */}
        <Services />

        {/* 6. Interior Design Gallery & Lightbox */}
        <InteriorGallery />

        {/* 7. Dedicated 3D Interior Experience (Interactive R3F Room) */}
        <Interior3DExperience />

        {/* 8. Why Choose NKR (4 Practical Pillars on Forest Green) */}
        <WhyChooseUs />

        {/* 9. Our Process (4 Steps Timeline) */}
        <Process />

        {/* 10. Contact & Enquiry Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
