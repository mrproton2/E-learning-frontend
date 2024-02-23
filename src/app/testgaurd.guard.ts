import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const testgaurdGuard: CanActivateFn = (route, state) => {
debugger
  const router = Inject(Router);
  const activeusersession = sessionStorage.getItem('activeuser')
  const RoleIDsession = sessionStorage.getItem('RoleID')

  debugger
  if (RoleIDsession == '1' && activeusersession) {
    return true;
  }
  if (RoleIDsession == '2' && activeusersession) {
    return true;
  }
  if (RoleIDsession == '3' && activeusersession) {
    return true;
  }
  else {
    return false;
  }

};
