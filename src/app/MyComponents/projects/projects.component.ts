import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      image_path: "../../../assets/images/projects/multi_thread.png",
      name: 'Multi - Threaded File Transfer System',
      language: 'Python',
      description: ['Concurrent File Transfer - From Multiple Server to Client'],
            link: 'https://github.com/amanjain487/multi-thread-file-transfer'
    },
    {      image_path: "../../../assets/images/projects/panoptic.jpg",

      name: 'Panoptic Segmentation using DETR',
      language: 'Python, PyTorch, Colab',
      description: ["Train DETR for Panoptic Segmentation on Custom Dataset"],
      link: 'https://github.com/amanjain487/panoptic-segmentation-using-DETR'
    },
{      image_path: "../../../assets/images/projects/yolo.jpg",

      name: 'Object Detection using YOLO',
      language: 'Python',
      description: ['Train YOLO Object Detection model on Custom Dataset'],
      link: 'https://www.youtube.com/watch?v=D4RQ7Rkrass'
    },
    {      image_path: "../../../assets/images/projects/color_detection.png",

      name: 'Color Detection and Speaker',
      language: 'Python',
      description: ['Detect RGB Value of Pixel and pronounce Color Name'],
      link: 'https://github.com/amanjain487/color_detection_speaker'
    },
    {      image_path: "../../../assets/images/projects/ai_hand_volume.png",

      name: 'Volume Control using Hand Gestures - AI',
      language: 'Python',
      description: ['Control volume of PC using hand gestures.'],
      link: 'https://www.youtube.com/watch?v=bMLMqmaXSFUs'
    },
    {      image_path: "../../../assets/images/projects/sudoku.png",

      name: 'Sudoku Solver - Computer Vision Application',
      language: 'Python',
      description: ['Solve sudoku by providing image of sudoku'],
      link: 'https://github.com/amanjain487/sudoku_cell_extractor'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
