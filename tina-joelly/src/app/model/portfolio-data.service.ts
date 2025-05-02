import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  bannerSections: any[] = [];

  constructor(private translate: TranslateService) {
    setTimeout(() => this.initializeBannerSections());
    this.translate.onLangChange.subscribe(() =>
      this.initializeBannerSections()
    );
  }

  initializeBannerSections() {
    this.translate
      .get([
        'hero-banner.frontend-developer',
        'hero-banner.based',
        'hero-banner.open-to-work',
        'hero-banner.remote-available',
      ])
      .subscribe((translations) => {
        this.bannerSections = [
          translations['hero-banner.frontend-developer'],
          translations['hero-banner.based'],
          translations['hero-banner.open-to-work'],
          translations['hero-banner.remote-available'],
        ];
      });
  }

  myDetailsList = [
    {
      iconUrl: '/assets/img/icons/location.png',
      description:
        'Where are you based? Would you be open to working remotely or potentially relocating?',
    },
    {
      iconUrl: '/assets/img/icons/cognition.png',
      description:
        'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?',
    },
    {
      iconUrl: '/assets/img/icons/quality.png',
      description:
        'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and  collaboration.',
    },
  ];

  skillsList = [
    {
      iconUrl: '/assets/img/skills_icons/HTML.png',
      title: 'HTML',
    },
    {
      iconUrl: '/assets/img/skills_icons/CSS.png',
      title: 'CSS',
    },
    {
      iconUrl: '/assets/img/skills_icons/JavaScript.png',
      title: 'JavaScript',
    },
    {
      iconUrl: '/assets/img/skills_icons/MaterialDesign.png',
      title: 'Material Design',
    },
    {
      iconUrl: '/assets/img/skills_icons/TypeScript.png',
      title: 'TypeScript',
    },
    {
      iconUrl: '/assets/img/skills_icons/Angular.png',
      title: 'Angular',
    },
    {
      iconUrl: '/assets/img/skills_icons/Firebase.png',
      title: 'Firebase',
    },
    {
      iconUrl: '/assets/img/skills_icons/Git.png',
      title: 'GIT',
    },
    {
      iconUrl: '/assets/img/skills_icons/Rest-Api.png',
      title: 'Rest-Api',
    },
    {
      iconUrl: '/assets/img/skills_icons/Scrum.png',
      title: 'Scrum',
    },
  ];

  projectsList = [
    {
      title: 'Little Reapers',
      description:
        'Jump, run and throw game based on object-oriented approach. Help the little reaper to find coins and poison bottles to fight against the crazy monsters.',
      technologies: [
        { iconUrl: '/assets/img/skills_icons/HTML-small.png', title: 'HTML' },
        { iconUrl: '/assets/img/skills_icons/CSS-small.png', title: 'CSS' },
        {
          iconUrl: '/assets/img/skills_icons/JavaScript-small.png',
          title: 'JavaScript',
        },
      ],
      teaserImg: '/assets/img/mockups/little_reapers_intro.png',
      mockupImg: '/assets/img/mockups/little_reapers_detail.png',
      gitHubUrl: 'https://github.com/tinyjoe/little_reapers',
      liveUrl: 'LiveUrl',
    },
    {
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: [
        { iconUrl: '/assets/img/skills_icons/HTML-small.png', title: 'HTML' },
        { iconUrl: '/assets/img/skills_icons/CSS-small.png', title: 'CSS' },
        {
          iconUrl: '/assets/img/skills_icons/JavaScript-small.png',
          title: 'JavaScript',
        },
        {
          iconUrl: '/assets/img/skills_icons/Firebase-small.png',
          title: 'Firebase',
        },
        {
          iconUrl: '/assets/img/skills_icons/Git-small.png',
          title: 'GIT',
        },
      ],
      teaserImg: '/assets/img/mockups/join_intro.png',
      mockupImg: '/assets/img/mockups/join_detail.png',
      gitHubUrl: 'https://github.com/tinyjoe/join',
      liveUrl: 'LiveUrl',
    },
    {
      title: 'Pokedex',
      description:
        'An illustrated Pokémon Encyclopedia, where you can find all sorts of Pokémon. You can also search for specific ones or view some detailed information from an API.',
      technologies: [
        { iconUrl: '/assets/img/skills_icons/HTML-small.png', title: 'HTML' },
        { iconUrl: '/assets/img/skills_icons/CSS-small.png', title: 'CSS' },
        {
          iconUrl: '/assets/img/skills_icons/JavaScript-small.png',
          title: 'JavaScript',
        },
        {
          iconUrl: '/assets/img/skills_icons/Rest-Api-small.png',
          title: 'Rest-Api',
        },
      ],
      teaserImg: '/assets/img/mockups/pokedex.png',
      mockupImg: '/assets/img/mockups/pokedex.png',
      gitHubUrl: 'https://github.com/tinyjoe/pokedex',
      liveUrl: 'LiveUrl',
    },
  ];

  referencesList = [
    {
      name: 'Jonas Müller',
      role: 'Team-Partner',
      quote:
        'Working with Tina was a real asset – her attention to detail and structured approach pushed our project forward significantly.',
    },
    {
      name: 'Anna Schulz',
      role: 'Frontend Engineer',
      quote:
        'Tina is not only technically skilled but also a great team player – always bringing clear communication and creative solutions.',
    },
    {
      name: 'David König',
      role: 'Frontend Developer',
      quote:
        'Tina has an impressive ability to translate complex designs precisely while keeping performance and usability in focus.',
    },
  ];
}
