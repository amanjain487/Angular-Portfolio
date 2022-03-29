import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education_details = [
    {image_path: "../../../assets/images/education/mca.jpg", name: 'Department of Computer Science, Pune University', score: '9.54 CGPA', year: '2019-2022'},
    {image_path: "../../../assets/images/education/bca.jpg", name: 'SRM University, Vadapalani Campus, Chennai', score: '8.92 CGPA', year: '2016-2019'},
    {image_path: "../../../assets/images/education/12th.jpg", name: 'Sairam Matric Hr. Sec School, Thiruthuraipoondi', score: '91.4%', year: '2015'},
    {image_path: "../../../assets/images/education/10th.JPG", name: 'Sairam Matric Hr. Sec School, Thiruthuraipoondi', score: '97.4%', year: '2013'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
