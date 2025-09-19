import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.about': 'Quiénes somos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Limpieza profesional en Córdoba con confianza y calidad',
    'hero.subtitle': 'En Limpiezas Limjuma cuidamos de tu comunidad, hogar u oficina con un servicio cercano, rápido y eficaz.',
    'hero.cta': 'Solicita tu presupuesto',
    
    // About
    'about.title': 'Más de 20 años de experiencia en servicios de limpieza',
    'about.text': 'En Limpiezas Limjuma somos especialistas en limpieza y mantenimiento en Córdoba. Nuestro compromiso es ofrecer un servicio profesional, adaptado a cada cliente, garantizando la máxima higiene, seguridad y confianza. Trabajamos con comunidades de vecinos, particulares, oficinas, locales y empresas que buscan un aliado serio y eficaz para mantener sus espacios impecables.',
    
    // Services
    'services.title': 'Nuestros servicios de limpieza',
    'services.community.title': 'Limpieza de comunidades de vecinos',
    'services.community.text': 'Nos ocupamos de la limpieza integral de portales, escaleras, ascensores, pasillos y zonas comunes, asegurando espacios cuidados y agradables para todos los residentes.',
    'services.homes.title': 'Limpieza de pisos y viviendas',
    'services.homes.text': 'Servicio de limpieza adaptado a hogares y pisos. Incluye mantenimiento regular o limpiezas profundas para mudanzas, obras o reformas.',
    'services.offices.title': 'Limpieza de oficinas y locales comerciales',
    'services.offices.text': 'Mantenemos tu espacio de trabajo en perfectas condiciones: mesas, suelos, baños, cristales y zonas comunes, creando un entorno saludable y profesional.',
    'services.garages.title': 'Limpieza de cocheras y garajes',
    'services.garages.text': 'Eliminamos polvo, suciedad y manchas en garajes y cocheras, mejorando la seguridad y la imagen de la comunidad o empresa.',
    'services.floors.title': 'Abrillantado y pulido de suelos',
    'services.floors.text': 'Especialistas en tratamiento y cuidado de suelos: mármol, terrazo, granito u otros materiales. Recuperamos el brillo y prolongamos su vida útil.',
    'services.industrial.title': 'Limpieza industrial especializada',
    'services.industrial.text': 'Limpieza en naves, almacenes y entornos industriales, con equipos y productos adecuados para espacios de gran tamaño y alta exigencia.',
    
    // Contact
    'contact.title': 'Pide tu presupuesto sin compromiso',
    'contact.subtitle': 'Estamos en Córdoba para atenderte con rapidez y confianza',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.service': 'Servicio de interés',
    'contact.form.service.placeholder': 'Selecciona un servicio',
    'contact.form.message': 'Mensaje',
    'contact.form.privacy': 'Acepto la política de privacidad',
    'contact.form.submit': 'Enviar consulta',
    'contact.address': 'Calle Historiador Jaén Morente, 32, 3-2, 14014 Córdoba, España',
    'contact.phone': '678 78 27 96 | 669 36 82 08',
    'contact.hours': 'Lunes a viernes de 8:00 a 15:00',
  },
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Professional cleaning in Córdoba with trust and quality',
    'hero.subtitle': 'At Limpiezas Limjuma we take care of your community, home or office with a reliable, fast and efficient service.',
    'hero.cta': 'Request a quote',
    
    // About
    'about.title': 'Over 20 years of experience in cleaning services',
    'about.text': 'At Limpiezas Limjuma we are specialists in cleaning and maintenance in Córdoba. Our commitment is to provide a professional service adapted to each client, guaranteeing maximum hygiene, safety and trust. We work with communities, individuals, offices, shops and companies that need a reliable partner to keep their spaces spotless.',
    
    // Services
    'services.title': 'Our cleaning services',
    'services.community.title': 'Community cleaning',
    'services.community.text': 'We take care of the complete cleaning of entrances, stairs, elevators, hallways and common areas, ensuring pleasant and well-maintained spaces for all residents.',
    'services.homes.title': 'Home and apartment cleaning',
    'services.homes.text': 'Cleaning service adapted to homes and apartments. Includes regular maintenance or deep cleaning for moving, renovations, or special needs.',
    'services.offices.title': 'Office and commercial cleaning',
    'services.offices.text': 'We keep your workplace in perfect condition: desks, floors, bathrooms, windows and common areas, creating a healthy and professional environment.',
    'services.garages.title': 'Garage cleaning',
    'services.garages.text': 'We remove dust, dirt and stains in garages, improving safety and the image of the community or company.',
    'services.floors.title': 'Floor polishing',
    'services.floors.text': 'Specialists in floor treatment and care: marble, terrazzo, granite and other materials. We restore shine and extend their durability.',
    'services.industrial.title': 'Industrial cleaning',
    'services.industrial.text': 'Cleaning of warehouses, industrial facilities and large spaces, with the right equipment and products for demanding environments.',
    
    // Contact
    'contact.title': 'Request your free quote',
    'contact.subtitle': 'We are in Córdoba to assist you quickly and reliably',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Service interested in',
    'contact.form.service.placeholder': 'Select a service',
    'contact.form.message': 'Message',
    'contact.form.privacy': 'I accept the privacy policy',
    'contact.form.submit': 'Send inquiry',
    'contact.address': 'Calle Historiador Jaén Morente, 32, 3-2, 14014 Córdoba, Spain',
    'contact.phone': '678 78 27 96 | 669 368 208',
    'contact.hours': 'Monday to Friday from 8:00 to 15:00',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};