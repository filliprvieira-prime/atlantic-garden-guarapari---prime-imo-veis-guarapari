import { 
  Zap, 
  Droplets, 
  Trash2, 
  Route, 
  CloudRain, 
  MapPin, 
  Trees, 
  Bike, 
  Dumbbell, 
  Gamepad2, 
  Truck, 
  Baby, 
  Heart, 
  Sun, 
  Waves
} from 'lucide-react';
import { Amenity, LocationTime, InfraItem } from './types';

export const PAGE_CONFIG = {
  theme: {
    primary: '#5B59A7',
    secondary: '#E8A2B9',
    accent: '#F8FAFC',
  },
  hero: {
    badge: 'Lançamento Exclusivo',
    title: 'Atlantic',
    titleAccent: 'Garden',
    subtitle: 'O primeiro bairro planejado de Guarapari com um Parque Linear exclusivo. Viva cercado de lazer, segurança e natureza.',
    imageDriveId: '1bgXAnziw-jg-HpKHMwdRSUSDGW_CFwG_', 
    defaultImage: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=2000',
    ctaPrimary: 'Garantir meu Lote',
    ctaSecondary: 'Conhecer o Lazer',
  },
  about: {
    sectionBadge: 'Sobre o Atlantic Garden',
    title: 'Um novo marco urbano para Guarapari',
    text1: 'Localizado estrategicamente em Lagoa Funda, o Atlantic Garden é um empreendimento assinado pela CBL, a maior loteadora do Espírito Santo.',
    text2: 'O projeto foi concebido para oferecer uma experiência de vida superior, com o primeiro Parque Linear da cidade totalmente integrado às residências.',
    imageDriveId: '1VAaSwp1XwCqQE-rN94uBmuC6O279lDsw', 
    defaultImage: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Lotes Residenciais', value: '621' },
      { label: 'A partir de', value: '300m²' },
      { label: 'Quadras Planejadas', value: '37' },
    ]
  },
  lazer: {
    title: 'Experiência de Lazer Única',
    subtitle: 'Mais de 10.000m² de áreas pensadas para o esporte e convivência.',
    galleryDriveIds: [
      '1fkkl2wFVBBC_nFhSJra3CdZc5y2lPWuR',
      '10IHd6wNJLWPmeBBAcbpn5DUoi8GqtTEf',
      '1LofA7dHyciq_BbN2FRBqxHDveZAevxqP',
      '1EleQBz_lZGB-s2E8LGPh44cs-yznqGfp',
      '1dgbqRXCUePMNpI6iFSQqNvn5zJlXUtET',
      '19C3ItC5MR40XJHUkiP6KqNC_953-BcgN'
    ]
  },
  infra: {
    title: 'Infraestrutura Padrão CBL',
    subtitle: 'Entrega garantida com todos os itens essenciais para sua construção imediata.',
    imageDriveId: '1six5QuF9N9RMHVML4qpCeIXE6VeIRao1', 
    defaultImage: 'https://images.unsplash.com/photo-1590012314607-cda9d9b6a2a1?auto=format&fit=crop&q=80&w=1600',
  },
  location: {
    title: 'Onde você quer estar',
    subtitle: 'Proximidade com os principais pontos de Guarapari.',
    imageDriveId: '100rq3ta-CKfUL87OJdnA-Qi-DDi69W2r',
    defaultImage: 'https://images.unsplash.com/photo-1524813685485-3de12dbde3f0?auto=format&fit=crop&q=80&w=1000',
  },
  primeGuarapari: {
    badge: 'Imobiliária Especializada',
    title: 'PRIME GUARAPARI',
    subtitle: 'Sua conquista, nosso compromisso.',
    description: 'Somos a Prime Imóveis Guarapari, referência no mercado imobiliário de Guarapari-ES, atuando com excelência na Praia do Morro, Centro e Enseada Azul. Oferecemos uma experiência segura e personalizada, conectando você às melhores oportunidades para morar, investir ou viver o melhor do litoral capixaba. CRECI: 9217-J.',
    website: 'https://www.primeguarapari.com.br/',
    logoDriveId: '158XFhqXEWgT65DHXJazdA4Mp--0jbZJv',
    stores: [
      {
        name: 'Enseada Azul',
        address: 'Av. Viña Del Mar, 274',
        mapsUrl: 'https://maps.app.goo.gl/p1TH7NvaJJZVPrCD7',
        imageDriveId: '1PMFgtc-qaxA2-C-0LVnjd-4c9QCF1MwA',
        defaultImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000'
      },
      {
        name: 'Centro',
        address: 'Rua Getúlio Vargas, 334',
        mapsUrl: 'https://maps.app.goo.gl/jb2kXoFBVarqoKrE8',
        imageDriveId: '1WjuA1UovsEr8zuT7YLqIjnrSwjqwcad3',
        defaultImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
      },
      {
        name: 'Praia do Morro',
        address: 'Av. Beira Mar, 1128',
        mapsUrl: 'https://maps.app.goo.gl/ziWi98hg3rz24V3h6',
        imageDriveId: '1NJ1hRjN4S7MhuOnMiHHIbGMyHpTNOH29',
        defaultImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
      }
    ]
  },
  contact: {
    title: 'AGENDE SUA VISITA AO LOTEAMENTO',
    description: 'Nossos especialistas estão prontos para apresentar as melhores condições.',
    phone: '(27) 99897-0484',
    email: 'prime@primeguarapari.com.br',
    whatsapp: '5527998970484',
    directWhatsappLink: 'https://w.app/primeimoveisguarapari',
    whatsappMessage: 'Olá! 👋 Vi o site do Atlantic Garden e gostaria de agendar uma visita.',
    locationLabel: 'Local do Loteamento',
    locationAddress: 'Lagoa Funda, Guarapari',
  }
};

export const AMENITIES: Amenity[] = [
  { title: 'Pista de Corrida', icon: 'Bike' },
  { title: 'Academia Funcional', icon: 'Dumbbell' },
  { title: 'Mesa de Jogos', icon: 'Gamepad2' },
  { title: 'Pérgola', icon: 'Sun' },
  { title: 'Color Lounge', icon: 'Waves' },
  { title: 'Play Infantil 1 e 2', icon: 'Baby' },
  { title: 'Bosque de Picnic', icon: 'Trees' },
  { title: 'Skate Park', icon: 'Bike' },
  { title: 'Área para Food Truck', icon: 'Truck' },
  { title: 'Pistinha Infantil', icon: 'Baby' },
  { title: 'Amarelinha', icon: 'Heart' },
  { title: 'Academia da Melhor Idade', icon: 'Dumbbell' },
];

export const INFRASTRUCTURE: InfraItem[] = [
  { title: 'Água', icon: 'Droplets' },
  { title: 'Luz', icon: 'Zap' },
  { title: 'Pavimentação', icon: 'Route' },
  { title: 'Rede de Esgoto', icon: 'Trash2' },
  { title: 'Drenagem Pluvial', icon: 'CloudRain' },
];

export const LOCATION_TIMES: LocationTime[] = [
  { place: 'Fórum', time: '2 min' },
  { place: 'Shopping Extra Center', time: '2 min' },
  { place: 'SESC', time: '3 min' },
  { place: 'IFES', time: '5 min' },
  { place: 'Praia do Morro', time: '5 min' },
  { place: 'Rodosol', time: '5 min' },
  { place: 'Centro', time: '8 min' },
  { place: 'Praia dos Namorados', time: '8 min' },
  { place: 'Praia da Areia Preta', time: '10 min' },
  { place: 'Multiplace MAIS', time: '20 min' },
];

export const IconMap: Record<string, React.ElementType> = {
  Zap, Droplets, Trash2, Route, CloudRain, MapPin, Trees, Bike, Dumbbell, Gamepad2, Truck, Baby, Heart, Sun, Waves
};