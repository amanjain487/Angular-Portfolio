import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience_details = [
      {image_path: "../../../assets/images/mathongo.jpg", name: 'MathonGo', role: 'Software Development and Automation', from: "June, 2021", to: "Present", description: ["AWS Lambda Functions, Python-Selenium, Database-Handling", "Managing a group of 5-8 Interns."]
    },
    {image_path: "../../../assets/images/mathongo.jpg", name: 'MathonGo', role: 'Data Science Intern', from: "January, 2021", to: "May, 2021", description: ["Gather, Analyze and Visualize Data from MARKS App, QUIZRR Platform."]
    },
    {image_path: "../../../assets/images/mathongo.jpg", name: 'MathonGo', role: 'Image Processing Intern', from: "November, 2020", to: "December, 2020", description: ["Process PDFs and extract out the content from PDFs in LaTeX code and manage interns."]
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
