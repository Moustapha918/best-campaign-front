import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environnements/environnement";
import {UploadReport} from "../datamodels/upload-report";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<UploadReport>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiUrl}/partisans/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/files`);
  }
}
