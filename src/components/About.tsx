import React, { forwardRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, Users, Timer } from 'lucide-react';

const About = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Timer,
      title: "20+",
      subtitle: "Años de experiencia",
      subtitleEn: "Years of experience"
    },
    {
      icon: Shield,
      title: "100%",
      subtitle: "Confianza garantizada",
      subtitleEn: "Guaranteed trust"
    },
    {
      icon: Users,
      title: "500+",
      subtitle: "Clientes satisfechos",
      subtitleEn: "Satisfied clients"
    },
    {
      icon: Award,
      title: "24/7",
      subtitle: "Servicio disponible",
      subtitleEn: "Service available"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-trust-dark mb-8">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t('about.text')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-card text-center hover:shadow-soft transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-clean-blue mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('nav.about') === 'About Us' ? feature.subtitleEn : feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;