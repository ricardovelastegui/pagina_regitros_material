import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UsersService } from './users.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const usersService= inject(UsersService);
  return true;
  console.log(usersService.isAuth());
};


// usersService.isAuth();