import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public titulo!: string;
    public subtitulo!: string;

  constructor() { }

  ngOnInit() {
    this.titulo! = 'Bem vindo a Loja'
    this.subtitulo! = 'Boas compras!'
  }

}
