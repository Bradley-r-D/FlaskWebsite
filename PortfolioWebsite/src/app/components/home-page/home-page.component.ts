import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
}
