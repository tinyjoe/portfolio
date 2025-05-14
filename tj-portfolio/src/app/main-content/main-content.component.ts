import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
    selector: 'app-main-content',
    imports: [
        HeroSectionComponent,
        AboutMeComponent,
        SkillsComponent,
        ProjectsComponent,
        ReferencesComponent,
        ContactSectionComponent,
    ],
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss'
})
export class MainContentComponent {}
