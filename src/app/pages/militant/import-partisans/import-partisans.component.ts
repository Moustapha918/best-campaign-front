import { Component } from '@angular/core';
import {FileUploadComponent} from "../../../components/file-upload/file-upload.component";
import {UploadReport} from "../../../datamodels/upload-report";
import {MatList, MatListItem} from "@angular/material/list";
import {PartisanModel} from "../../../datamodels/partisan.model";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-import-partisans',
  standalone: true,
  imports: [
    FileUploadComponent,
    MatList,
    MatListItem,
    NgIf,
    MatIcon
  ],
  templateUrl: './import-partisans.component.html',
  styleUrl: './import-partisans.component.css'
})
export class ImportPartisansComponent {
  failedElements: PartisanModel[] = [];
  successElements: PartisanModel[] = [];

  displayReport(event: UploadReport) {
    this.failedElements = event.failedElements
    this.successElements = event.successElements
  }
}
