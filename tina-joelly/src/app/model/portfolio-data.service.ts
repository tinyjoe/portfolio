import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  constructor() {}

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
    { iconUrl: '/assets/img/skills_icons/HTML.png', title: 'HTML' },
    { iconUrl: '/assets/img/skills_icons/CSS.png', title: 'CSS' },
    { iconUrl: '/assets/img/skills_icons/JavaScript.png', title: 'JavaScript' },
    {
      iconUrl: '/assets/img/skills_icons/MaterialDesign.png',
      title: 'Material Design',
    },
    { iconUrl: '/assets/img/skills_icons/TypeScript.png', title: 'TypeScript' },
    { iconUrl: '/assets/img/skills_icons/Angular.png', title: 'Angular' },
    { iconUrl: '/assets/img/skills_icons/Firebase.png', title: 'Firebase' },
    { iconUrl: '/assets/img/skills_icons/Git.png', title: 'GIT' },
    { iconUrl: '/assets/img/skills_icons/Rest-Api.png', title: 'Rest-Api' },
    { iconUrl: '/assets/img/skills_icons/Scrum.png', title: 'Scrum' },
    {
      iconUrl: '/assets/img/skills_icons/GrowthMindset.png',
      title: 'Growth mindset',
    },
  ];

  projectsList = [
    {
      title: 'Little Reapers',
      description:
        'Jump, run and throw game based on object-oriented approach. Help the little reaper to find coins and poison bottles to fight against the crazy monsters.',
      technologies: [
        { iconUrl: '/assets/img/skills_icons/HTML.png', title: 'HTML' },
        { iconUrl: '/assets/img/skills_icons/CSS.png', title: 'CSS' },
        {
          iconUrl: '/assets/img/skills_icons/JavaScript.png',
          title: 'JavaScript',
        },
      ],
      teaserImg: 'teaser',
      mockupImg: 'MockUp',
      gitHubUrl: 'GitHub Link',
      liveUrl: 'LiveUrl',
    },
    {
      title: 'Join',
      description:
        'Jump, run and throw game based on object-oriented approach. Help the little reaper to find coins and poison bottles to fight against the crazy monsters.',
      technologies: [
        { iconUrl: '/assets/img/skills_icons/HTML.png', title: 'HTML' },
        { iconUrl: '/assets/img/skills_icons/CSS.png', title: 'CSS' },
        {
          iconUrl: '/assets/img/skills_icons/JavaScript.png',
          title: 'JavaScript',
        },
        { iconUrl: '/assets/img/skills_icons/Firebase.png', title: 'Firebase' },
        { iconUrl: '/assets/img/skills_icons/Git.png', title: 'GIT' },
      ],
      teaserImg: 'teaser',
      mockupImg: 'MockUp',
      gitHubUrl: 'GitHub Link',
      liveUrl: 'LiveUrl',
    },
    {
      title: 'Pokedex',
      description:
        'Jump, run and throw game based on object-oriented approach. Help the little reaper to find coins and poison bottles to fight against the crazy monsters.',
      technologies: [
        { iconUrl: '/assets/img/skills_icons/HTML.png', title: 'HTML' },
        { iconUrl: '/assets/img/skills_icons/CSS.png', title: 'CSS' },
        {
          iconUrl: '/assets/img/skills_icons/JavaScript.png',
          title: 'JavaScript',
        },
        { iconUrl: '/assets/img/skills_icons/Rest-Api.png', title: 'Rest-Api' },
      ],
      teaserImg: 'teaser',
      mockupImg: 'MockUp',
      gitHubUrl: 'GitHub Link',
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
