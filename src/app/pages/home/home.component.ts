import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {RouterLink} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatDivider,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

   constructor(private userService: UserService) {
  }

  async ngOnInit() {

    const a = await this.userService.currentAuthenticatedUser();
    console.log("-------------" + a)
  }



}
