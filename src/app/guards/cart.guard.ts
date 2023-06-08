import { CanActivateFn } from '@angular/router';

export const cartGuard: CanActivateFn = (route, state) => {
  // const isLoggedIn: boolean = localStorage.getItem('access_token')
  // ? true:false
  // return isLoggedIn;

  return true
};
