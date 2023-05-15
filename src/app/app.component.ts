import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string ="";
  showSuccessMessage: boolean | undefined;
  showErrorMessage: boolean | undefined;
  subscribe() {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(this.email)) {
      // Valid Gmail address
      this.showSuccessMessage = true;
      this.showErrorMessage = false;
    } else {
      // Invalid Gmail address
      this.showSuccessMessage = false;
      this.showErrorMessage = true;
    }
  }
}
