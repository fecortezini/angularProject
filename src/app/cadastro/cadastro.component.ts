import { AuthenticationService } from './../services/authentication.service';
import { Accounts } from './../models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dataFromForm!: Accounts;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.dataFromForm = new Accounts();
  }

  register(){
    //console.log(this.dataFromForm);
    this.auth.registrar(this.dataFromForm);
  }

}
