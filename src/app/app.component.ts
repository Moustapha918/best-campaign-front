import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {UserService} from "./services/user.service";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatMiniFabButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatSlideToggle, AmplifyAuthenticatorModule, SpinnerComponent, NgOptimizedImage, MatIcon, MatMiniFabButton, MatButton, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'best-campaign-front';


  constructor() {
  }
}
