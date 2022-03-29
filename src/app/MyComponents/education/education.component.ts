import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education_details = [
    { name: 'PUCSD', score: '99.99%', year: '2019-22' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
