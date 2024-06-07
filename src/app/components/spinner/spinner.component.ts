import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    NgIf
  ],
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLoading = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe(loading => {
      this.isLoading = loading;
    });
  }
}
