import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import * as mutations from '../graphql/mutations'
import {generateClient} from "aws-amplify/api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'best-campaign-front';
  private client: any;

  constructor() {
    this.client = generateClient();
  }

  async ngOnInit(): Promise<void> {
    const res = await this.client.graphql({
      query: mutations.updatePartisan,

    });
    console.log(res)
  }
}
