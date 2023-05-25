import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavpageComponent {
  constructor(private route: ActivatedRoute) {}

  @ViewChild(MatSidenav)
  drawer!: MatSidenav;

  page_name = 'Welcome to My Website';
  showValues = true;
  changeValues() {
    console.log(this.showValues);
    this.showValues = !this.showValues;
  }
}
