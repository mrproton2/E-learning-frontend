import { Inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const guardGuard: CanActivateChildFn = (childRoute, state) => {
  const router = Inject(Router);
  const session = sessionStorage.getItem('activeuser')
   debugger

  if (session) {
    debugger
    console.log('hellojvbsj'+session)
    
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }





  return true;
};
