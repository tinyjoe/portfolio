import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  bannerSections: any[] = [];
  myDetailsList: any[] = [];
  projectsList: any[] = [];
  referencesList: any[] = [];

  constructor(private translate: TranslateService) {
    this.translateBannerSections();
    this.translateDetailsList();
    this.translateProjectsList();
    this.translateReferences();
  }

  translateBannerSections() {
    setTimeout(() => this.initializeBannerSections());
    this.translate.onLangChange.subscribe(() =>
      this.initializeBannerSections()
    );
  }

  translateDetailsList() {
    setTimeout(() => this.initializeDetailsList());
    this.translate.onLangChange.subscribe(() => this.initializeDetailsList());
  }

  translateProjectsList() {
    setTimeout(() => this.initializeProjectsList());
    this.translate.onLangChange.subscribe(() => this.initializeProjectsList());
  }

  translateReferences() {
    setTimeout(() => this.initializeReferences());
    this.translate.onLangChange.subscribe(() => this.initializeReferences());
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

  initializeDetailsList() {
    this.translate
      .get(['about-me.location', 'about-me.cognition', 'about-me.quality'])
      .subscribe((translations) => {
        this.myDetailsList = [
          {
            iconUrl: '/assets/img/icons/location.png',
            description: translations['about-me.location'],
          },
          {
            iconUrl: '/assets/img/icons/cognition.png',
            description: translations['about-me.cognition'],
          },
          {
            iconUrl: '/assets/img/icons/quality.png',
            description: translations['about-me.quality'],
          },
        ];
      });
  }

  initializeProjectsList() {
    this.translate
      .get(['projects.little-reapers', 'projects.join', 'projects.pokedex'])
      .subscribe((translations) => {
        this.projectsList = [
          {
            title: 'Little Reapers',
            description: translations['projects.little-reapers'],
            technologies: [
              {
                iconUrl: '/assets/img/skills_icons/HTML-small.png',
                title: 'HTML',
              },
              {
                iconUrl: '/assets/img/skills_icons/CSS-small.png',
                title: 'CSS',
              },
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
            description: translations['projects.join'],
            technologies: [
              {
                iconUrl: '/assets/img/skills_icons/HTML-small.png',
                title: 'HTML',
              },
              {
                iconUrl: '/assets/img/skills_icons/CSS-small.png',
                title: 'CSS',
              },
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
            description: translations['projects.pokedex'],
            technologies: [
              {
                iconUrl: '/assets/img/skills_icons/HTML-small.png',
                title: 'HTML',
              },
              {
                iconUrl: '/assets/img/skills_icons/CSS-small.png',
                title: 'CSS',
              },
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
      });
  }

  initializeReferences() {
    this.translate
      .get([
        'references.jm-quote',
        'references.as-quote',
        'references.dk-quote',
      ])
      .subscribe((translations) => {
        this.referencesList = [
          {
            name: 'Jonas Müller',
            role: 'Team-Partner',
            quote: translations['references.jm-quote'],
          },
          {
            name: 'Anna Schulz',
            role: 'Frontend Engineer',
            quote: translations['references.as-quote'],
          },
          {
            name: 'David König',
            role: 'Frontend Developer',
            quote: translations['references.dk-quote'],
          },
        ];
      });
  }

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
}
