// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KimYoungWoong1',
  },
  base: '/hero.github.io/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'KimYoungWoong1/CAVE',
          'KimYoungWoong1/hero.github.io',
          'byungkun0823/ami-highlight-project',
        ],
      },
    },
    external: {
      header: 'Research Projects',
      projects: [
        {
          title: 'AMI Meeting Highlight Detection',
          description:
            'A multimodal meeting highlight detection pipeline for AMI meetings, covering XML parsing, manual GT creation, pseudo-labeling, summarization model training, raw-video inference, benchmarks, and ablation studies.',
          imageUrl:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
          link: 'https://github.com/byungkun0823/ami-highlight-project',
        },
        {
          title: 'CAVE: Credibility Audit for AI-Generated Evidence',
          description:
            'A local web demo for auditing AI-generated images and deepfake videos through provenance checks, detector ensembles, rPPG signals, generator fingerprints, cross-layer audit, and GNN-based harm assessment.',
          imageUrl:
            'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop',
          link: 'https://github.com/KimYoungWoong1/CAVE',
        },
        {
          title: 'Nymeria HAR Dataset Construction',
          description:
            'A data construction pipeline that maps natural-language activity annotations to UCI/UCA-style HAR labels and crops matching IMU windows into labeled human activity recognition segments.',
          imageUrl:
            'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop',
          link: 'https://github.com/KimYoungWoong1',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kim YoungWoong',
    description:
      'Research portfolio focused on multimodal learning, dataset construction, meeting summarization, computer vision, speech processing, and trustworthy AI systems.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'hero_0825',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://kimyoungwoong1.github.io/hero.github.io/',
    phone: '',
    email: 'herojason02@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Python',
    'PyTorch',
    'Transformers',
    'Multimodal Learning',
    'Computer Vision',
    'NLP',
    'Speech Processing',
    'Dataset Construction',
    'Pseudo-labeling',
    'Model Evaluation',
    'Ablation Study',
    'CLIP',
    'DistilBERT',
    'Wav2Vec2',
    'Whisper ASR',
    'Speaker Diarization',
    'Streamlit',
    'GNN',
  ],
  experiences: [
    {
      company: 'Intelligence and Interactive System Lab',
      position: 'Undergraduate Researcher',
      from: 'February 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Visual Information Processing Laboratory',
      position: 'Undergraduate Researcher',
      from: 'March 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Data & Language Intelligence Laboratory',
      position: 'Undergraduate Researcher',
      from: 'July 2025',
      to: 'January 2026',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'B.S. Student',
      from: '2021',
      to: '2027',
    },
  ],
  publications: [
    {
      title:
        'Meeting Highlight GT Scarcity 완화를 위한 Semi-Automatic Dataset 구축 프레임워크',
      conferenceName: '',
      journalName: 'Manuscript',
      authors: 'Kim YoungWoong',
      link: '',
      description:
        'A semi-automatic dataset construction framework for reducing ground-truth scarcity in meeting highlight detection, combining rule-based candidate generation, human review, and pseudo-labeling.',
    },
  ],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'lofi',
      'wireframe',
      'business',
      'winter',
      'nord',
      'silk',
      'procyon',
    ],
  },

  footer: `Built with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>.`,

  enablePWA: true,
};

export default CONFIG;
