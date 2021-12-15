import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Accounts } from '../models/account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts!: Accounts[];

  constructor() { }

  ngOnInit() {
    // this.getAccounts.getAccounts()
    // .subscribe(dados => this.accounts = dados);
    //console.log(this.accounts)
  }

}
