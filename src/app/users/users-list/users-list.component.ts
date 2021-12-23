import { AlertService } from '../../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounts } from '../../models/account';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!: Observable<Accounts[]>;

  @ViewChild('dataForm') test: any;
  
  constructor(
    private api: ApiService,
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList():void {
    this.users = this.api.getUsers();
  }

  editar(id: number){
    //console.log(id);
    this.router.navigate(['editar', id], {relativeTo: this.route})
  }
  deletar(user: Accounts){
    this.api.deleteUser(user.id)
    .subscribe(
      data => {
        //console.log(data.status);
        this.refreshList();
      },
      httpError => {
        this.alert.error(httpError.error.msg)
      }
    );
    console.log("deletado");
  }
}
