import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
import { Logon } from './logon-models';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogonService {

  baseUrl = 'http://localhost:333/logon'

  constructor(private snackBar: MatSnackBar,private http: HttpClient) {
  }

  create(login: Logon): Observable<Logon>{
    return this.http.post<Logon>(this.baseUrl, login)
  }
  showMessage(msg: string): void  {
    this.snackBar.open(msg, 'x', {
      duration: 6000,
      verticalPosition: 'bottom'
    });

}}
