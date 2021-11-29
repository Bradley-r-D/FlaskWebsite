import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavpageComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  @ViewChild(MatSidenav)
  drawer!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute
  ) {}

  page_name = 'Welcome to My Website';
  showValues = true;
  changeValues() {
    console.log(this.showValues);
    this.showValues = !this.showValues;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
