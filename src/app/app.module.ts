import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './MyComponents/navigation/navigation.component';
import { ExperienceComponent } from './MyComponents/experience/experience.component';
import { EducationComponent } from './MyComponents/education/education.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { CoursesComponent } from './MyComponents/courses/courses.component';
import { SkillsComponent } from './MyComponents/skills/skills.component';
import { HomeComponent } from './MyComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    CoursesComponent,
    SkillsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
