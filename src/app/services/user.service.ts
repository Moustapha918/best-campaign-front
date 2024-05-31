import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userEmail: string | undefined;

  constructor() {

  }

}
