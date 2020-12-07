import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isWideScreen$: Observable<boolean>

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 480px)')) {
      console.info('The screen width is less than 480px');
    }
    this.isWideScreen$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => matches));
  }
}
