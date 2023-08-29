import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  authService.getAuthUser();
  if (authService) {
    return true;
  }
  router.navigate(['/login'], {
    queryParams: { returnUrl: state.url }
  });


  return false;
}