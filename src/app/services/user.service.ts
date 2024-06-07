import {Injectable} from '@angular/core';
import {fetchAuthSession} from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {

  }
  async getToken() {
    const {accessToken} = (await fetchAuthSession()).tokens ?? {};
    return accessToken?.toString();
  }
}
