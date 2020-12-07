import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isWideScreen$: Observable<boolean>
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 480px)')) {
      console.info('The screen width is less than 480px');
    }
    this.isWideScreen$ = this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape])
      .pipe(map(({ matches }) => matches));
  }
}
