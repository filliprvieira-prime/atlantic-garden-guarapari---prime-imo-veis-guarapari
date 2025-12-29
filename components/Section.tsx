import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', id, dark = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${dark ? 'bg-atlantic-purple text-white' : 'bg-white text-gray-800'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider ${dark ? 'text-white' : 'text-atlantic-purple'}`}>
              {title}
            </h2>
            {subtitle && <p className="text-lg opacity-80 max-w-2xl mx-auto">{subtitle}</p>}
            <div className={`h-1 w-20 mx-auto mt-6 ${dark ? 'bg-atlantic-pink' : 'bg-atlantic-purple'}`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};