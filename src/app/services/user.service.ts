import {Injectable} from '@angular/core';
import {fetchAuthSession} from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {

  }


  async currentSession() {
    try {
      const {accessToken, idToken} = (await fetchAuthSession()).tokens ?? {};
      console.log(accessToken?.toString())
      console.log(idToken?.toString())
    } catch (err) {
      console.log(err);
    }
  }

  async getToken() {
    const {accessToken} = (await fetchAuthSession()).tokens ?? {};
    return accessToken?.toString();
  }
}
