import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private authService = inject(AuthService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authUser = this.authService.getAuthUser();
    if (authUser?.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authUser.access_token}`
        }
      });
    }

    return next.handle(request);
  }
}
