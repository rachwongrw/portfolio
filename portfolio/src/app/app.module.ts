import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// --------------------- COMPONENTS ---------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { ProjectsComponent } from './projects/projects.component';
// --------------------- MATERIAL ---------------------
import {Component} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { IndexComponent } from './index/index.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompetenciesComponent,
    ProjectsComponent,
    FooterComponent,
    IndexComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Component,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
