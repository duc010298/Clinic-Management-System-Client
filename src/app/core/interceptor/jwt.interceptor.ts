import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CredentialsService } from '../service/credentials.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private credentialsService: CredentialsService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        if (this.credentialsService.isAuthenticated() && environment.apiUrl) {

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.credentialsService.credentials.token}`
                }
            });
        }

        return next.handle(request);
    }
}