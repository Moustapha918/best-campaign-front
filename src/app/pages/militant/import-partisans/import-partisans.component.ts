import { Component } from '@angular/core';
import {FileUploadComponent} from "../../../components/file-upload/file-upload.component";

@Component({
  selector: 'app-import-partisans',
  standalone: true,
  imports: [
    FileUploadComponent
  ],
  templateUrl: './import-partisans.component.html',
  styleUrl: './import-partisans.component.css'
})
export class ImportPartisansComponent {

}
