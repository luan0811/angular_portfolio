import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Me' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'accomplishments', component: AccomplishmentsComponent, title: 'Accomplishments' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', redirectTo: '' }
];