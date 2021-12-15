import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logon } from './logon-models';
import { LogonService } from './logon.service';



@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  logon: Logon = {

    nome: '',
    email: '',
    senha: ''
  }

  constructor(private LogonService: LogonService, private router: Router ) {

  }

  ngOnInit(): void {

  }

  createLogon(): void {
    this.LogonService.create(this.logon).subscribe(() =>{
      this.LogonService.showMessage('Cadastro Feito! ')
    })
  }


}
