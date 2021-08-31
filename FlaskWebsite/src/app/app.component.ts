import { Component, HostBinding } from '@angular/core';
import { ColorSchemeService } from './theme-changer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    this.colorSchemeService.load();
  }
  title = 'FlaskWebsite';
}
