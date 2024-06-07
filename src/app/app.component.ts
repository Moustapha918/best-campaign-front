import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {UserService} from "./services/user.service";
import {SpinnerComponent} from "./components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatSlideToggle, AmplifyAuthenticatorModule, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'best-campaign-front';


  constructor(private  userService: UserService) {
  }

  async ngOnInit() {
    this.userService.currentSession()
  }
}
