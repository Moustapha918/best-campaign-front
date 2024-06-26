import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {VoteCenter} from "../datamodels/vote.center";
import {environment} from "../../environnements/environnement";
import {HttpClient} from "@angular/common/http";
import {OfficeModel} from "../datamodels/officeModel";

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getCenters(): Observable<VoteCenter[]> {
    return this.httpClient.get<VoteCenter[]>(`${this.apiUrl}/militant/centers`)
  }

  getOffices(center: String | null): Observable<OfficeModel[]> {
    return this.httpClient.get<OfficeModel[]>(`${this.apiUrl}/offices?center=${center}`);
  }
}
