import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../projects/project.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  sub;
  id;
  project: Project;

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
     
      let projects = this.projectService.getProjects();
      this.project = projects.find(p => p.id === this.id)
      // var techList = this.project.tech.split(",").join(" | ")
      // this.project.tech = techList
      console.log("this.id", this.id, "project:", this.project)
    })
  }

}
