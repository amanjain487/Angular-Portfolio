import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education_details = [
    {image_path: "../../../assets/images/mca.jpg", name: 'Department of Computer Science', score: '9.54 CGPA', year: '2019-2022'},
    {image_path: "../../../assets/images/bca.jpg", name: 'SRM University', score: '8.92 CGPA', year: '2016-2019'},
    {image_path: "../../../assets/images/12th.jpg", name: 'Sairam Matric Hr. Sec School', score: '91.4%', year: '2015'},
    {image_path: "../../../assets/images/10th.JPG", name: 'Sairam Matric Hr. Sec School', score: '97.4%', year: '2013'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
