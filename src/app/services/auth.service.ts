export class AuthService {

    isAuth = false;

    

    signOut() {
      this.isAuth = false;
    }
  }
