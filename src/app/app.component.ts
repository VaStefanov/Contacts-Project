import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeStatus: boolean = true;
  aboutStatus: boolean = false;
  contactsStatus: boolean = false;

  clickEvent(event) {
    switch (event) {
      case 'about':
        this.aboutStatus = !this.aboutStatus;
        this.contactsStatus = false;
        this.homeStatus = false;

        break;
      case 'contacts':
        this.contactsStatus = !this.contactsStatus;
        this.aboutStatus = false;
        this.homeStatus = false;
        break;
      default:
        this.homeStatus = !this.homeStatus;
        this.contactsStatus = false;
        this.aboutStatus = false;
        break;
    }
  }
}
