import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './MyComponents/courses/courses.component';
import { EducationComponent } from './MyComponents/education/education.component';
import { ExperienceComponent } from './MyComponents/experience/experience.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { SkillsComponent } from './MyComponents/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
