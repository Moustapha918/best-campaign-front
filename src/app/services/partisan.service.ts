import {Injectable} from '@angular/core';
import {from, map, Observable} from "rxjs";
import {PartisanModel} from "../datamodels/partisan.model";
import {HttpClient} from "@angular/common/http";
import * as queries from "../../graphql/queries";
import {Client, generateClient} from "aws-amplify/api";


@Injectable({
  providedIn: 'root'
})
export class PartisanService {
  public client: Client;

  constructor(private httpClient: HttpClient) {
    this.client = generateClient();
  }

  findByNni(nni: string): Observable<PartisanModel | undefined> {

    const variables = {
      filter: {
        nni: {
          eq: nni
        }
      }
    };
    const response = this.client.graphql({
      query: queries.listPartisans,
      variables: variables
    });
    return from(response).pipe(
      map(response => response.data.listPartisans.items
        .map(item => new PartisanModel(item.nni, `${item.first_name} ${item.last_name} `, item.partisanOfficeId!, item.partisanOfficeId!))
        .find(item => item.nni === nni))
    )
  }
}
