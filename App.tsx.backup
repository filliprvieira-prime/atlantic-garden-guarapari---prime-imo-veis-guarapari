import React, { useState, useEffect } from 'react';
import { AMENITIES, INFRASTRUCTURE, LOCATION_TIMES, IconMap, PAGE_CONFIG } from './constants';
import { Section } from './components/Section';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Trees, 
  Heart, 
  Timer,
  ExternalLink
} from 'lucide-react';

const App: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '' 
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', PAGE_CONFIG.theme.primary);
    document.documentElement.style.setProperty('--secondary-color', PAGE_CONFIG.theme.secondary);
  }, []);

  const getDriveUrl = (id: string) => {
    if (!id || id.length < 10) return "";
    return `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Novo Contato - Atlantic Garden*\n\n` +
                    `*Nome:* ${formData.name}\n` +
                    `*E-mail:* ${formData.email}\n` +
                    `*WhatsApp:* ${formData.phone}\n` +
                    `*Mensagem:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${PAGE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-[var(--secondary-color)] selection:text-white font-['Inter']">
      <style>{`
        :root {
          --primary-color: ${PAGE_CONFIG.theme.primary};
          --secondary-color: ${PAGE_CONFIG.theme.secondary};
        }
        .bg-custom-primary { background-color: var(--primary-color); }
        .text-custom-primary { color: var(--primary-color); }
        .border-custom-primary { border-color: var(--primary-color); }
        .bg-custom-secondary { background-color: var(--secondary-color); }
        .text-custom-secondary { color: var(--secondary-color); }
        .border-custom-secondary { border-color: var(--secondary-color); }
        .hero-img { object-position: center 20%; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-custom-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-custom-primary/20">A</div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-custom-primary uppercase leading-none">Atlantic Garden</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-custom-secondary font-bold">Guarapari • ES</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center font-bold text-xs uppercase tracking-widest text-slate-500">
            <a href="#sobre" className="hover:text-custom-primary transition-colors">O Bairro</a>
            <a href="#lazer" className="hover:text-custom-primary transition-colors">Lazer</a>
            <a href="#infra" className="hover:text-custom-primary transition-colors">Infra</a>
            <a href="#localizacao" className="hover:text-custom-primary transition-colors">Localização</a>
            <a href={PAGE_CONFIG.contact.directWhatsappLink} target="_blank" rel="noopener noreferrer" className="bg-custom-primary text-white px-6 py-3 rounded-full hover:bg-custom-secondary transition-all">Quero Saber Mais</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-slate-200">
          <img 
            src={getDriveUrl(PAGE_CONFIG.hero.imageDriveId)} 
            alt="Topo" 
            className="w-full h-full object-cover hero-img"
            referrerPolicy="no-referrer"
            onError={(e) => { (e.target as HTMLImageElement).src = PAGE_CONFIG.hero.defaultImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent md:from-[var(--primary-color)]/90 md:via-[var(--primary-color)]/30 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-custom-secondary text-white rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
              {PAGE_CONFIG.hero.badge}
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-white">
              {PAGE_CONFIG.hero.title} <br/> <span className="text-custom-secondary">{PAGE_CONFIG.hero.titleAccent}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-xl font-medium text-slate-100 leading-relaxed">
              {PAGE_CONFIG.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PAGE_CONFIG.contact.directWhatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-custom-primary px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-custom-secondary hover:text-white transition-all shadow-2xl shadow-black/20 text-center">
                {PAGE_CONFIG.hero.ctaPrimary}
              </a>
              <a href="#lazer" className="bg-custom-primary/30 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                {PAGE_CONFIG.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Sobre */}
      <Section id="sobre" className="!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative pr-12 pb-12">
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3]">
              <img src={getDriveUrl(PAGE_CONFIG.about.imageDriveId)} alt="Diferencial" className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => { (e.target as HTMLImageElement).src = PAGE_CONFIG.about.defaultImage; }} />
            </div>
            <div className="absolute bottom-0 right-0 bg-custom-primary p-10 rounded-[40px] shadow-2xl text-white z-20 min-w-[240px]">
              <p className="text-6xl font-black leading-none mb-1">100%</p>
              <p className="text-[13px] uppercase tracking-widest font-black leading-tight opacity-90">Pronto para<br/>construir</p>
            </div>
          </div>
          <div className="lg:pl-8">
            <span className="text-custom-secondary font-black uppercase tracking-[0.4em] text-[13px] mb-6 block">{PAGE_CONFIG.about.sectionBadge}</span>
            <h2 className="text-5xl md:text-6xl font-black mb-10 text-custom-primary leading-[0.95] uppercase">{PAGE_CONFIG.about.title}</h2>
            <div className="space-y-6 text-slate-600">
              <p className="text-lg font-medium leading-relaxed">{PAGE_CONFIG.about.text1}</p>
              <p className="text-lg leading-relaxed">{PAGE_CONFIG.about.text2}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 pt-12 border-t border-slate-100">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-custom-primary group-hover:bg-custom-primary group-hover:text-white transition-all shadow-sm"><MapPin size={28} /></div>
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">Acesso Facilitado</span>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-custom-primary group-hover:bg-custom-primary group-hover:text-white transition-all shadow-sm"><Trees size={28} /></div>
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">Áreas Verdes</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção Lazer */}
      <Section id="lazer" className="bg-slate-50" title={PAGE_CONFIG.lazer.title} subtitle={PAGE_CONFIG.lazer.subtitle}>
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAGE_CONFIG.lazer.galleryDriveIds.map((id, idx) => (
              <div key={idx} className="relative rounded-[40px] overflow-hidden shadow-xl aspect-[4/3] bg-white group hover:shadow-2xl transition-all duration-500">
                <img src={getDriveUrl(id)} alt={`Lazer ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {AMENITIES.map((amenity, idx) => {
              const Icon = IconMap[amenity.icon] || Heart;
              return (
                <div key={idx} className="group p-6 bg-white border border-slate-100 rounded-[35px] text-center hover:bg-custom-primary transition-all duration-500 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 mx-auto mb-4 bg-slate-50 rounded-xl flex items-center justify-center text-custom-primary group-hover:bg-custom-secondary group-hover:text-white transition-all"><Icon size={24} /></div>
                  <h4 className="font-black text-slate-800 text-[10px] group-hover:text-white uppercase tracking-widest">{amenity.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Seção Infra */}
      <Section id="infra" dark title={PAGE_CONFIG.infra.title} subtitle={PAGE_CONFIG.infra.subtitle}>
        <div className="flex flex-col gap-16">
          <div className="w-full max-w-6xl mx-auto rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5">
            <img src={getDriveUrl(PAGE_CONFIG.infra.imageDriveId)} alt="Infraestrutura" className="w-full h-auto block" referrerPolicy="no-referrer" onError={(e) => { (e.target as HTMLImageElement).src = PAGE_CONFIG.infra.defaultImage; }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {INFRASTRUCTURE.map((item, idx) => {
              const Icon = IconMap[item.icon] || MapPin;
              return (
                <div key={idx} className="group text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-[25px] flex items-center justify-center text-white border border-white/20 group-hover:bg-custom-secondary group-hover:border-custom-secondary transition-all transform group-hover:rotate-12"><Icon size={32} /></div>
                  <p className="font-black uppercase tracking-[0.2em] text-[11px]">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Seção Localização */}
      <Section id="localizacao" title={PAGE_CONFIG.location.title} subtitle={PAGE_CONFIG.location.subtitle}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-4">
            {LOCATION_TIMES.map((loc, idx) => (
              <div key={idx} className="flex justify-between items-center p-6 bg-slate-50 border border-slate-100 rounded-[25px] hover:border-custom-secondary transition-colors group">
                <span className="text-slate-800 font-black uppercase text-xs tracking-widest">{loc.place}</span>
                <div className="flex items-center gap-2 text-custom-secondary font-black text-sm"><Timer size={18} /><span>{loc.time}</span></div>
              </div>
            ))}
          </div>
          <div className="relative rounded-[60px] overflow-hidden shadow-2xl h-[550px] border-[12px] border-slate-50 bg-slate-100">
            <img src={getDriveUrl(PAGE_CONFIG.location.imageDriveId)} alt="Mapa" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </Section>

      {/* Seção Contato */}
      <Section id="contato" className="bg-slate-50 !py-32">
        <div className="max-w-[1400px] mx-auto shadow-2xl rounded-[60px] overflow-hidden bg-white">
          <div className="flex flex-col lg:flex-row">
            <div className="bg-custom-primary p-12 md:p-20 text-white lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter mb-16">{PAGE_CONFIG.contact.title}</h2>
              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center shrink-0"><Phone size={32} /></div>
                  <div><p className="text-[10px] uppercase font-black opacity-60 tracking-[0.3em] mb-1">Telefone</p><p className="text-2xl md:text-3xl font-black whitespace-nowrap">{PAGE_CONFIG.contact.phone}</p></div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center shrink-0"><Mail size={32} /></div>
                  <div className="min-w-0 flex-1"><p className="text-[10px] uppercase font-black opacity-60 tracking-[0.3em] mb-1">E-mail</p><p className="text-sm font-bold truncate">{PAGE_CONFIG.contact.email}</p></div>
                </div>
              </div>
            </div>
            <div className="p-12 md:p-24 lg:w-1/2 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="w-full space-y-8">
                <input type="text" placeholder="Seu Nome Completo" required className="w-full px-10 py-6 bg-slate-50 border-2 border-transparent rounded-full focus:border-custom-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 font-medium text-lg" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="tel" placeholder="WhatsApp" required className="w-full px-10 py-6 bg-slate-50 border-2 border-transparent rounded-full focus:border-custom-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 font-medium text-lg" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  <input type="email" placeholder="Seu E-mail" required className="w-full px-10 py-6 bg-slate-50 border-2 border-transparent rounded-full focus:border-custom-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 font-medium text-lg" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <textarea placeholder="Como podemos ajudar?" rows={4} required className="w-full px-10 py-8 bg-slate-50 border-2 border-transparent rounded-[40px] focus:border-custom-primary focus:bg-white focus:outline-none transition-all resize-none placeholder:text-slate-400 font-medium text-lg" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                <button type="submit" className="w-full py-8 bg-custom-primary text-white rounded-full font-black uppercase tracking-[0.4em] hover:bg-custom-secondary transition-all flex items-center justify-center gap-5 text-sm shadow-2xl shadow-custom-primary/30 transform hover:-translate-y-1 active:scale-95">Solicitar Contato <Send size={22} /></button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção Imobiliária (Prime) */}
      <Section id="imobiliaria" className="!py-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center items-center">
          {PAGE_CONFIG.primeGuarapari.logoDriveId && <div className="mb-12 max-w-[320px]"><img src={getDriveUrl(PAGE_CONFIG.primeGuarapari.logoDriveId)} alt="Logo Prime" className="w-full h-auto mx-auto" referrerPolicy="no-referrer" /></div>}
          <span className="text-custom-secondary font-black uppercase tracking-[0.4em] text-[13px] mb-6 block">{PAGE_CONFIG.primeGuarapari.badge}</span>
          <p className="text-xl md:text-2xl font-bold text-slate-800 italic border-l-4 border-custom-secondary pl-6 text-left max-w-2xl mx-auto mb-10">"{PAGE_CONFIG.primeGuarapari.subtitle}"</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl">{PAGE_CONFIG.primeGuarapari.description}</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
            <a href={PAGE_CONFIG.primeGuarapari.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-custom-primary text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest shadow-xl transform hover:-translate-y-1">Visitar Website <ExternalLink size={18} /></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
            {PAGE_CONFIG.primeGuarapari.stores.map((store, idx) => (
              <div key={idx} className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-50 group">
                <div className="relative aspect-video overflow-hidden">
                  <img src={getDriveUrl(store.imageDriveId)} alt={store.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-8"><h3 className="text-white font-black text-xl uppercase tracking-tighter">{store.name}</h3></div>
                </div>
                <div className="p-8">
                  <a href={store.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-slate-50 transition-all">
                    <MapPin size={24} className="text-custom-secondary mt-1" />
                    <div className="text-left"><p className="text-slate-800 font-bold text-lg leading-tight">{store.address}</p></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 border-t border-slate-100 text-center">
        <div className="flex items-center justify-center gap-4 mb-8"><div className="w-14 h-14 bg-custom-primary rounded-2xl flex items-center justify-center text-white font-black text-3xl">A</div><p className="font-black text-custom-primary uppercase tracking-tighter text-2xl">Atlantic Garden</p></div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300 font-black mb-2">Loteamento Registrado na Matrícula 71.676 - Guarapari - ES</p>
        <p className="text-[9px] uppercase tracking-widest text-slate-400 font-medium">© {new Date().getFullYear()} Prime Guarapari & CBL Lotes.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={PAGE_CONFIG.contact.directWhatsappLink}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all hover:rotate-12"
      >
        <MessageCircle size={36} />
      </a>
    </div>
  );
};

export default App;