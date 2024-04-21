import {Component, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileUploadService} from "../../services/file-upload.service";
import {MatToolbar} from "@angular/material/toolbar";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatFormField} from "@angular/material/form-field";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatProgressBar,
    MatFormField,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    AsyncPipe,
    MatListItem,
    MatCardTitle,
    MatInput,
    MatButton,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.currentFile = event.target.files[0];
      this.fileName = this.currentFile?.name || "sans-nom";
    } else {
      this.fileName = 'Selectionnez un fichier!';
    }
  }

  upload(): void {
    this.progress = 0;
    this.message = "";

    if (this.currentFile) {

      this.uploadService.upload(this.currentFile).subscribe(
        {
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Une erreur est survenue lors du chargement du fichier!';
            }

            this.currentFile = undefined;
          }
        }
      )
    }

  }
}
