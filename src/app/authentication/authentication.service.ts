import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable()
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private showLogin = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) { }

  async login(user: User) {
    if (user.userName === 'bruno.nascimento' && user.password === '1234' ) {
      this.loggedIn.next(true);
      this.router.navigate(['']);
      user.authData = window.btoa(user.password);
      localStorage.setItem('id', JSON.stringify(user.authData));
      localStorage.setItem('name', JSON.stringify(user.userName));
    }
  }

  async logout() {
    this.loggedIn.next(false);
    this.router.navigate(['login']);
    localStorage.removeItem('id');
    localStorage.removeItem('name');
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('id'));
    return user !==  null;
  }

  get isShowLogin() {
    return this.showLogin.asObservable();
  }

}
