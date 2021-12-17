import { AlertService } from './../services/alert.service';
import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounts } from '../models/account';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  users!: Observable<Accounts[]>;

  constructor(
    private api: ApiService,
    private route: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList():void {
    this.users = this.api.getUsers();
  }

  editar(user: Accounts){
    console.log(user);
    this.route.navigate(['editar'])
  }
  deletar(user: Accounts){
    this.api.deleteUser(user.id)
    .subscribe(
      data => {
        console.log(data.status);
        this.refreshList();
      },
      httpError => {
        this.alert.error(httpError.error.msg)
      }
    );
    console.log("deletado");
  }
}

// userss = [
//   {
//     user: "ContaUm",
//     pass: "SenhaUm"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   },
//   {
//     user: "ContaDois",
//     pass: "SenhaDois"
//   }
// ]
