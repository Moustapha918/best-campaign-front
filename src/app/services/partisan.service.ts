import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PartisanModel} from "../datamodels/partisan.model";
import {HttpClient} from "@angular/common/http"
import {environment} from "../../environnements/environnement";


@Injectable({
  providedIn: 'root'
})
export class PartisanService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  findByNni(nni: string): Observable<PartisanModel> {
    return this.httpClient.get<PartisanModel>(`${this.apiUrl}/partisans/${nni}`)
  }

  addToMilitant(partisan: PartisanModel): Observable<PartisanModel> {
    return this.httpClient.put<PartisanModel>(`${this.apiUrl}/partisans`, partisan)
  }
}
