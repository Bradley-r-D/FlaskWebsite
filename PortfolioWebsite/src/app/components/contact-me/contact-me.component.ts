import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/visitor';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  constructor() {}
  visitor = new Visitor();

  ngOnInit(): void {}

  logData() {
    console.log(this.visitor);
  }
}
