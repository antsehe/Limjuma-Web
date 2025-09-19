import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import limjumaLogo from '@/assets/LIMJUMA_logo_final.png';

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSectionClick }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={limjumaLogo} 
            alt="Limpiezas Limjuma Logo" 
            className="h-14 w-auto"
          />
          <span className="text-xl font-bold text-trust-dark hidden sm:block">Limpiezas Limjuma</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => onSectionClick('about')}
            className="text-trust-dark hover:text-clean-blue transition-colors"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => onSectionClick('services')}
            className="text-trust-dark hover:text-clean-blue transition-colors"
          >
            {t('nav.services')}
          </button>
          <button
            onClick={() => onSectionClick('contact')}
            className="text-trust-dark hover:text-clean-blue transition-colors"
          >
            {t('nav.contact')}
          </button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe size={16} />
            {language === 'es' ? 'EN' : 'ES'}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
          >
            <Globe size={16} />
            {language === 'es' ? 'EN' : 'ES'}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;