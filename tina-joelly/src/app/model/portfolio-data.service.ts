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

  projectsList = [];
}
