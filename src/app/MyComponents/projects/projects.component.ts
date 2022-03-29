import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'Project Name',
      language: 'C++, Python, JS',
      description: 'Project description goes here',
      link: 'https://www.github.com/anubhavc9/Food-Order-App'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
