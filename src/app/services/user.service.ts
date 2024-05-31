import {Injectable} from '@angular/core';
import {getCurrentUser, fetchAuthSession} from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userEmail: string | undefined;

  constructor() {

  }

  async currentAuthenticatedUser() {
    try {
      const a = await fetchAuthSession()
      console.log(a.tokens?.accessToken.toString())
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${JSON.stringify(signInDetails) }`);
      // return MilitantModel(username, username, username)
    } catch (err) {
      console.log(err);
    }
  }

  /*async getAuthToken() {
    try {
      const session = await Auth.currentSession();
      const idToken = session.getIdToken().getJwtToken();
      return idToken;
    } catch (error) {
      console.error('Error getting auth token', error);
      return null;
    }
  }*/

}
