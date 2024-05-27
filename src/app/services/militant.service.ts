import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {PartisanModel} from "../datamodels/partisan.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environnements/environnement";

@Injectable({
  providedIn: 'root'
})
export class MilitantService {
  private apiUrl = environment.apiUrl;
  private idMilitant: number = 1;

  constructor(private httpClient: HttpClient) { }

  getConnectedUserPartisans(): Observable<PartisanModel[]> {

    const loggedUser = "1"
    return this.httpClient.get<PartisanModel[]>(`${this.apiUrl}/militants/${loggedUser}/partisans`)

  }

  addPartisan(partisan: PartisanModel): Observable<PartisanModel> {
    return this.httpClient.put<PartisanModel>(`${this.apiUrl}/militants/${(this.idMilitant)}/attach`, partisan)
  }
}
