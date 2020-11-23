import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    new Project(1, 'Project 1', "React, Node, AWS, MongoDB", 'Here is a description for project 1.', "img path"),
    new Project(2, 'Project 2', "Angular, SCSS", 'Here is a description for project 2.', "img path"),
    new Project(3, 'Project 3', "React, Ruby", 'Here is a description for project 3.', "img path"),
    new Project(4, 'Project 4', "React, Node, JS", 'Here is a description for project 1.', "img path"),
    new Project(5, 'Project 5', "Angular, .NET, SQL", 'Here is a description for project 2.', "img path"),
    new Project(6, 'Project 6', "React, Ruby", 'Here is a description for project 3.', "img path")
  ]
  constructor() { }

  getProjects(): Project[] {
    return this.projects
  }
}
