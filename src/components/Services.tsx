import React, { forwardRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Home, Briefcase, Car, Sparkles, Factory } from 'lucide-react';

const Services = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      titleKey: 'services.community.title',
      textKey: 'services.community.text',
      color: 'from-clean-blue to-clean-blue/80'
    },
    {
      icon: Home,
      titleKey: 'services.homes.title',
      textKey: 'services.homes.text',
      color: 'from-clean-green to-clean-green/80'
    },
    {
      icon: Briefcase,
      titleKey: 'services.offices.title',
      textKey: 'services.offices.text',
      color: 'from-clean-blue to-clean-blue/80'
    },
    {
      icon: Car,
      titleKey: 'services.garages.title',
      textKey: 'services.garages.text',
      color: 'from-clean-green to-clean-green/80'
    },
    {
      icon: Sparkles,
      titleKey: 'services.floors.title',
      textKey: 'services.floors.text',
      color: 'from-clean-blue to-clean-blue/80'
    },
    {
      icon: Factory,
      titleKey: 'services.industrial.title',
      textKey: 'services.industrial.text',
      color: 'from-clean-green to-clean-green/80'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-trust-dark mb-4">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-trust-dark mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.textKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;