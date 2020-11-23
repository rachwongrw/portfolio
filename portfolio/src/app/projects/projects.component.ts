import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsList: Project[] = []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectsList = this.projectService.getProjects()
  }

}
