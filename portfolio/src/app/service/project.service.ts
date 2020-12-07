import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    new Project(1, 'Hoopstir', "React, Node, AWS, MongoDB", "Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB.For this pwork in a full stack capacity, with extra focus on the front end. Due to client confidentiality, the repository is private.", "../../assets/images/hoopstir-1.png"),
    new Project(2, 'Client PWA', "React, Node", 'Building a PWA application for a client from scratch. Primarily using React and Node. This applications was build using React Hooks. Due to client confidentiality, this repository is private.', "img path"),
    new Project(3, 'Student Works', "API, Ruby", `Predominantly worked with the Sign Request API `, "img path"),
    new Project(4, 'Group Project In Angular', "Angular, Node, JS", 'This was originally a school group project where we created an ecommerce website. This was converted from Vanilla JS to Angular.', "img path"),
    new Project(5, 'Project 5', "Angular, .NET, SQL", '`Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path"),
    new Project(6, 'Project 6', "React, Ruby", '`Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB. I predominantly worked in a full stack capacity, with extra focus on the front end', "img path")
  ]
  constructor() { }

  getProjects(): Project[] {
    return this.projects
  }
}

