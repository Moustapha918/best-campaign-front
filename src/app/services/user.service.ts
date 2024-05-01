import {Injectable} from '@angular/core';
import {getCurrentUser} from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userEmail: string | undefined;

  constructor() {
    this.currentAuthenticatedUser()
  }

  async currentAuthenticatedUser(): Promise<void> {
    try {
      const user = await getCurrentUser();
      this.userEmail = user.signInDetails?.loginId

    } catch (err) {
      console.log(err);
    }
  }
}
