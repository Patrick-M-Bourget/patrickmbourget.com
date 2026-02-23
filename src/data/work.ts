export type WorkCategory = 'product' | 'audio';

export interface WorkItem {
  title: string;
  description: string;
  category: WorkCategory;
  href?: string;
  /** Product/Design: path under public/ (e.g. /work/landr.jpg) or URL */
  image?: string;
  /** Product/Design: slug for detail page at /work/[slug] */
  slug?: string;
  /** Product/Design: full description for detail page; falls back to description if missing */
  longDescription?: string;
}

export interface FeaturedAlbum {
  spotifyAlbumId: string;
  credit: string;
  artist?: string;
}

export const work: WorkItem[] = [
  // Product leadership
  {
    title: 'LANDR — AI-powered mastering & creative tools',
    description:
      'Leading product for the market leader in cloud mastering; roadmaps for core platform and mobile, collaboration tools, and data-informed growth.',
    category: 'product',
    href: 'https://www.landr.com',
    image: '/work/landr.png',
    slug: 'landr',
    longDescription:
      'I lead product at LANDR Audio, the market leader in AI-powered cloud mastering for musicians and audio professionals. My work spans roadmaps for the core platform and mobile app, collaboration tools for artists and teams, and data-informed growth. I collaborate on platform-wide product initiatives, support and mentor product managers, and apply agile best practices.',
  },
  {
    title: 'LANDR Stems',
    description:
      'Stem separation for creative flexibility — isolate vocals, drums, bass, and other elements from any track for remixing and production.',
    category: 'product',
    href: 'https://www.landr.com',
    image: '/work/landr-stems.png',
    slug: 'landr-stems',
    longDescription:
      'LANDR Stems gives musicians and producers the ability to separate any song into individual stems — vocals, drums, bass, and others — for remixing, sampling, and creative production. I contributed to product direction and roadmap for this AI-powered stem separation tool, helping artists gain new creative flexibility from their existing audio.',
  },
  {
    title: 'LANDR Sampler',
    description:
      'Sample-based instrument for loading, editing, and playing audio — with waveform view, ADSR, key/velocity, and a built-in keyboard.',
    category: 'product',
    href: 'https://www.landr.com',
    image: '/work/landr-sampler.png',
    slug: 'landr-sampler',
    longDescription:
      'LANDR Sampler is an audio sampling instrument for loading and playing samples in the DAW. It offers slot-based sample loading with advanced filters, waveform view and editing (WAVE, FX, SEQ tabs), ADSR and playback parameters (attack, decay, sustain, release, transpose, velocity, stretch, direction), and a virtual piano keyboard for playing samples across the key range. Powered by Monkey.',
  },
  {
    title: 'LANDR Composer',
    description:
      'Music composition tool with scene-based arrangement, chord progressions, and tracks for chords, bass, and melody — with DAW sync and AI-assisted generation.',
    category: 'product',
    href: 'https://www.landr.com',
    image: '/work/landr-composer.png',
    slug: 'landr-composer',
    longDescription:
      'LANDR Composer is a composition application for creating and arranging musical ideas. It offers scene-based workflow, chord progression and key/scale controls, and track-based layout for chords, bass, and melody. Features include DAW sync, transport controls, and AI-assisted chord progression generation to help musicians sketch and develop ideas quickly.',
  },
  {
    title: 'LANDR Synth X',
    description:
      'Subtractive synthesizer plugin with dual oscillators, filters, modulators, modulation matrix, and effects — for sound design in the DAW.',
    category: 'product',
    href: 'https://www.landr.com',
    image: '/work/landr-synth-x.png',
    slug: 'landr-synth-x',
    longDescription:
      'LANDR Synth X is a synthesizer plugin for digital audio workstations, offering subtractive synthesis with dual oscillators (including vowel and analog-style waves), dual filters, ADSR envelopes, LFOs, and a modulation matrix. Built-in effects include delay, reverb, chorus, and drive, with preset management and randomization for fast sound design and inspiration.',
  },
  {
    title: 'Pro Services Marketplace',
    description:
      'Designed and launched a marketplace connecting musicians with mastering and mixing pros; owned vendor and consumer experience and supply quality.',
    category: 'product',
    image: '/work/pro-services.png',
    slug: 'pro-services-marketplace',
    longDescription:
      'I led the product design, build, and launch of a Pro Services Marketplace for musicians — connecting artists with mastering and mixing professionals. I defined and owned the product roadmap for both the vendor and consumer experience, coordinated sourcing and quality assurance of vendor supply, conducted user research and interviews to inform the roadmap, and used data-driven insights to identify testing and monetization opportunities.',
  },
  {
    title: 'RePitch 2 — Synchro Arts',
    description:
      'Pitch correction and editing plugin with visual pitch grid, scale snap, formant shift, and macro-based workflow for vocals and instruments.',
    category: 'product',
    href: 'https://www.synchroarts.com',
    image: '/work/repitch-2.png',
    slug: 'repitch-2',
    longDescription:
      'RePitch 2 (Synchro Arts) is a pitch correction and editing plugin featuring a visual pitch grid for editing note segments over time. It offers scale snap (e.g. chromatic), formant shift, note-level controls for drift and level, capture and macro workflows, and tools for drawing, quantizing, and editing pitch. Used for vocals and monophonic material in the DAW.',
  },
  {
    title: 'VocAlign 6 — Synchro Arts',
    description:
      'Vocal alignment and pitch correction with GUIDE/DUB/OUTPUT workflow, match timing and pitch controls, and SmartPitch for tuned vocals.',
    category: 'product',
    href: 'https://www.synchroarts.com',
    image: '/work/vocalign-6.png',
    slug: 'vocalign-6',
    longDescription:
      'VocAlign 6 (Synchro Arts) is an advanced vocal alignment and pitch correction tool. It uses a GUIDE/DUB/OUTPUT workflow to align doubles and harmonies to a guide track, with controls for match timing (max difference loose/tight), match pitch, alignment rules, target mode, and SmartPitch. Features include Enhanced Pitch, Shaper Tool, and high-resolution processing for precise, professionally-tuned vocals.',
  },
  {
    title: 'Reason Rack — Reason Studios',
    description:
      'The legendary Reason Rack as a plugin — full instrument and effect rack that works in any major DAW.',
    category: 'product',
    href: 'https://www.reasonstudios.com',
    image: '/work/reason-rack.png',
    slug: 'reason-rack',
    longDescription:
      'Reason Rack (Reason Studios) brings the classic Reason instrument and effect rack into any major DAW as a plugin. It includes synths like Objekt, drum machines like Redrum, and the full Reason sound design workflow. Compatible with Ableton Live, Studio One, Logic Pro, Pro Tools, Cubase, FL Studio, and more.',
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

/** Albums to show as Spotify embeds in the Audio section. Album ID from Spotify URL: open.spotify.com/album/XYZ */
export const featuredAlbums: FeaturedAlbum[] = [
  {
    spotifyAlbumId: '07lbso0DsJ9rlmLuaTNF5o',
    credit: 'Engineer',
    artist: 'Bonewaves — Eternal Surfer',
  },
  {
    spotifyAlbumId: '6KQrz3jkKdeJLxJoyNjKLs',
    credit: 'Producer, mixer, engineer',
    artist: 'Haviitz — Nickels & Dimes',
  },
];
