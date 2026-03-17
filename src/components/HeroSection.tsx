import { DecorativeDivider } from './DecorativeDivider';

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  showDivider?: boolean;
}

export function HeroSection({ title, backgroundImage, showDivider = true }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-32 pb-16">
        {showDivider && <DecorativeDivider />}
        <h1 className="section-title">{title}</h1>
        {showDivider && <DecorativeDivider />}
      </div>
    </section>
  );
}
