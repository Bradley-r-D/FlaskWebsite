import { SaveDataService } from './../../services/save-data.service';
import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/visitor';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  YOUR_SERVICE_ID = environment.email_ServiceID;
  YOUR_TEMPLATE_ID = environment.email_TemplateID;
  YOUR_USER_ID = environment.email_UserID;

  constructor(private dataMover: SaveDataService) {}
  visitor = new Visitor();

  ngOnInit(): void {}

  onSubmit(e: Event) {
    this.dataMover.storeData(this.visitor);
    emailjs
      .sendForm(
        this.YOUR_SERVICE_ID,
        this.YOUR_TEMPLATE_ID,
        e.target as HTMLFormElement,
        this.YOUR_USER_ID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
