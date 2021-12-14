import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from './login-models';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:333/login'

  constructor(private snackBar: MatSnackBar,private http: HttpClient) {
  }
  showMessage(msg: string): void  {
    this.snackBar.open(msg, 'x', {
      duration: 6000,
      verticalPosition: 'bottom'
    });
  }

  create(login: Login): Observable<Login>{
    return this.http.post<Login>(this.baseUrl, login)
  }
}
