import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login-models';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {

    nome: '',
    email: '',
    senha: ''
  }

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  createLogin(): void {
    this.LoginService.create(this.login).subscribe(() =>{
      this.LoginService.showMessage('Cadastro Feito! ')
    })
  }

}
