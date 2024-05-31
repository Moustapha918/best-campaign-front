import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PartisanModel} from "../datamodels/partisan.model";
import {HttpClient} from "@angular/common/http"
import {environment} from "../../environnements/environnement";


class OfficeElectoralReport {
}

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
  findElectorsByOffice(officeLabel: string): Observable<PartisanModel[]> {
    return this.httpClient.get<PartisanModel[]>(`${this.apiUrl}/offices/${officeLabel}/electors`)
  }

  vote(electorToVote: PartisanModel): Observable<OfficeElectoralReport> {
    return this.httpClient.put<OfficeElectoralReport>(`${this.apiUrl}/partisans/${electorToVote?.nni}/vote`, electorToVote)
  }
}
