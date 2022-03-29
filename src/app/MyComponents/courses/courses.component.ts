import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {image_path: "../../../assets/images/courses/aws.png",
    name: 'AWS - Developer Associate', platform: 'Udemy'},
    {image_path: "../../../assets/images/courses/django.png",
    name: 'Python - Django', platform: 'Udemy'},
    {image_path: "../../../assets/images/courses/tsai.png",
    name: 'Extended Vision AI', platform: 'The School of AI'},
    {image_path: "../../../assets/images/courses/cnn.jpg",
    name: 'Convolutional NN', platform: 'Coursera'},
    {image_path: "../../../assets/images/courses/deep_learning.jpg",
    name: 'Deep Learning and NN', platform: 'Coursera'},
    {image_path: "../../../assets/images/courses/pandas.png",
    name: 'Python - Pandas', platform: 'Kaggle'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
