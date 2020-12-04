import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    new Project(1, 'Hoopstir', "React, Node, AWS, MongoDB", `Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end.`, "../../assets/images/hoopstir-1.png"),
    new Project(2, 'Project 2', "Angular, SCSS", 'Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path"),
    new Project(3, 'Project 3', "React, Ruby", '`Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path"),
    new Project(4, 'Project 4', "React, Node, JS", '`Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path"),
    new Project(5, 'Project 5', "Angular, .NET, SQL", '`Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path"),
    new Project(6, 'Project 6', "React, Ruby", '`Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path")
  ]
  constructor() { }

  getProjects(): Project[] {
    return this.projects
  }
}

