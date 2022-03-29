import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience_details = [
    {name: 'Company Name', role: 'Role', description: 'Description of the work here'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
