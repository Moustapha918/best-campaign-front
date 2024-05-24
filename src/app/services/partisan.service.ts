import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PartisanModel} from "../datamodels/partisan.model";
import {HttpClient} from "@angular/common/http";
import {Client, generateClient} from "aws-amplify/api";


@Injectable({
  providedIn: 'root'
})
export class PartisanService {
  public client: Client;

  constructor(private httpClient: HttpClient) {
    this.client = generateClient();
  }

  findByNni(nni: string): Observable<PartisanModel> {
    return this.httpClient.get<PartisanModel>(`http://url${nni}`)
  }

  addToMilitant(partisan: PartisanModel): Observable<PartisanModel> {
    return this.httpClient.post<PartisanModel>("http://url_create_partisan", partisan)
  }
}
