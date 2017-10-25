<<<<<<< HEAD
import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const appRoutes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: '', component: AboutMeComponent },
  { path: '**', component: AboutMeComponent }
];
=======
import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const appRoutes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: '', component: AboutMeComponent },
  { path: '**', component: AboutMeComponent }
];
>>>>>>> 826ec3ec95212f4c7bde8fd4146852f2fe049167
