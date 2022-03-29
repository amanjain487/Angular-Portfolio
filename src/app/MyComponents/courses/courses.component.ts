import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {name: 'Programming with Python', platform: 'Udemy', description: 'Course description goes here'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
