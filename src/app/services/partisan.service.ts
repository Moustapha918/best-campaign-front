import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PartisanModel} from "../datamodels/partisan.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PartisanService{
  constructor(private httpClient: HttpClient) {
  }

  findByNni(nni: string): Observable<PartisanModel> {
    return new BehaviorSubject(
      new PartisanModel(nni, "Caroline Dupont", "Arafat", "Ecole 5")
    ).asObservable()
  }

  addToMilitant(partisan: PartisanModel): Observable<any> {
    return this.httpClient.post("http://localhost:8080/partisans", partisan)
  }

  findUserPartisans(): Observable<PartisanModel[]> {
    return this.httpClient.get<PartisanModel[]>("http://localhost:8080/partisans")
  }
}
