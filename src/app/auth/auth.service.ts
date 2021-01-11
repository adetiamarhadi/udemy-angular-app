import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {

  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {

    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEhxNJ_wUMHRg14DcP4ejkN_5ozIVrvKc',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(
        errorResponse => {
          let errorMessage = 'An unknown error occurred!'
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'The email address is already in use by another account.';
          }
          return throwError(errorMessage);
        }
      )
    );
  }

  login(email: string, password: string) {

    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEhxNJ_wUMHRg14DcP4ejkN_5ozIVrvKc',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
