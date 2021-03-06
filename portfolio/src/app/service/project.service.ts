import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    new Project(1, 'Hoopstir', "React, Node, AWS, MongoDB", "Hoopstir is a Sports Software application designed to support and automate the administrative tasks required for basketball. This project is predominantly built in React, Node and Mongo DB.\n\nFor this project, I worked in a full stack capacity, with extra focus on the front end. Due to client confidentiality, the repository is private.", "../../assets/images/hoopstir-1.png"),
    new Project(2, 'Client PWA', "React, Node", 'Building a PWA application for a client from scratch. Primarily using React and Node. This applications was built using React Hooks. Due to client confidentiality, this repository is private.', "../../assets/images/placeholder-project.jpg"),
    new Project(3, 'Student Works', "API, Ruby", `This is a client project built in Ruby. For this project, I predominantly worked with the Sign Request API.Due to client confidentiality, this repository is private.`, "../../assets/images/placeholder-project.jpg"),
    new Project(4, 'Eccommerce Site in Angular', "Angular, Node, JS", 'This was originally a group project where we created an snowboarding ecommerce website. This individual project was was converted from Vanilla JS and HTML into an Angular project. \n\nIt is a more simplified version of the group project than concentrated on getting the cart working. For the group project, I took lead in the team, delegated amd managed our progress. I primarily focused on creating the design/mockups, the questionnaire form and provided assistance to other team members where needed.', "../../assets/images/suki-1.png"),
    new Project(5, '.NET eCommerce Website', ".NET, SQL, JavaScript", 'This is an individual project where I built an ecommerce site using Razor pages with authentication and authorization.', "../../assets/images/eshoponweb-1.png"),
    new Project(6, 'Armoire', ".NET, JavaScript, AWS S3, Azure, SQL", "In this group project, we're building a small application that takes the inventory of your closet, aids decision making on dressing for the day and notifies you when to do laundry. We have created the application with .NET Razor pages, a SQL database and has been deployed to Azure. The application allows for image upload to S3 as well.\n\nMy role included, but limited to, working on the carousel page, pagination and mockups which can be viewed on Figma.", "../../assets/images/armoire-1.png")
  ]
  constructor() { } 

  getProjects(): Project[] {
    return this.projects
  }
}

