export type WorkCategory = 'product' | 'design' | 'audio';

export interface WorkItem {
  title: string;
  description: string;
  category: WorkCategory;
  href?: string;
}

export const work: WorkItem[] = [
  // Product leadership
  {
    title: 'LANDR — AI-powered mastering & creative tools',
    description:
      'Leading product for the market leader in cloud mastering; roadmaps for core platform and mobile, collaboration tools, and data-informed growth.',
    category: 'product',
    href: 'https://www.landr.com',
  },
  {
    title: 'Pro Services Marketplace',
    description:
      'Designed and launched a marketplace connecting musicians with mastering and mixing pros; owned vendor and consumer experience and supply quality.',
    category: 'product',
  },
  {
    title: 'Chit-Chat Distro',
    description:
      'Founded a boutique agency distributing new music to campus and public radio; 60+ records, 500+ Earshot/CBC chart spots, #1 over 80+ times.',
    category: 'product',
  },
  // Design
  {
    title: 'Product design & UX at LANDR',
    description:
      'User research, journey mapping, and product design for mastering and creative tools; collaboration with design and eng to ship clear, usable experiences.',
    category: 'design',
  },
  {
    title: 'UX/UI & design thinking',
    description:
      'Trained in app design, UX, UI, and design thinking; applied in product discovery, feature design, and cross-functional alignment.',
    category: 'design',
  },
  {
    title: 'Section4 Brand Strategist',
    description:
      'Certified Brand Strategist (Section4); use strategy and positioning to shape product and marketing narratives.',
    category: 'design',
  },
  // Audio engineering
  {
    title: 'Recording engineer — Indica Records',
    description:
      'Credits include Busty and the Bass, The Franklin Electric, Vincent Appleby, Elephant Stone, Pony Girl; tracking, mixing, and production.',
    category: 'audio',
  },
  {
    title: 'Producer & composer',
    description:
      'Freelance production (GrandBuda, Lea Keeley, Indica Records); film scoring and custom composition (e.g. The Lower Plateau).',
    category: 'audio',
  },
  {
    title: 'Artist & performer',
    description:
      'Recording artist as Haviitz, Patrick Steele; performer and collaborator in the Montreal scene.',
    category: 'audio',
  },
];
