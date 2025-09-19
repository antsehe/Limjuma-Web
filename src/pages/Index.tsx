import React, { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import limjumaLogo from '@/assets/limjuma-logo.png';

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    let targetRef;
    switch (section) {
      case 'about':
        targetRef = aboutRef;
        break;
      case 'services':
        targetRef = servicesRef;
        break;
      case 'contact':
        targetRef = contactRef;
        break;
      default:
        return;
    }
    
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSectionClick={scrollToSection} />
      <main>
        <Hero onContactClick={scrollToContact} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Contact ref={contactRef} />
      </main>
      
      {/* Footer */}
      <footer className="bg-trust-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-xl font-bold">Limpiezas Limjuma S.L.</span>
          </div>
          <p className="text-white/70 mb-2">
            Servicios profesionales de limpieza en Córdoba desde 2003
          </p>
          <p className="text-white/70 text-sm">
            © 2024 Limpiezas Limjuma S.L. Todos los derechos reservados.
          </p>
          <img 
            src={limjumaLogo} 
            alt="Limpiezas Limjuma Logo" 
            className="h-12 w-auto mx-auto mt-4 rounded-lg"
          />  
        </div>
      </footer>
    </div>
  );
};

export default Index;
