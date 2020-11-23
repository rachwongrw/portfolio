import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('Project 1', "React, Node, AWS, MongoDB", 'Here is a description for project 1.', "img path"),
    new Project('Project 2', "Angular, SCSS", 'Here is a description for project 2.', "img path"),
    new Project('Project 3', "React, Ruby", 'Here is a description for project 3.', "img path"),
    new Project('Project 4', "React, Node, JS", 'Here is a description for project 1.', "img path"),
    new Project('Project 5', "Angular, .NET, SQL", 'Here is a description for project 2.', "img path"),
    new Project('Project 6', "React, Ruby", 'Here is a description for project 3.', "img path")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
