import { AlertService } from '../../services/alert.service';
import { Accounts } from '../../models/account';
import { ApiService } from '../../services/api.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  user!: Accounts;

  constructor(
    private route: ActivatedRoute,
    private alert: AlertService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.user = new Accounts();

    this.route.params
    .pipe(
      map(params => params['id']),
      switchMap(id => this.api.getUser(id))
    ).subscribe(
      data => this.user = data
    )
  }
  redirect(){
    this.router.navigate(['users'])
  }
  updateUser(){
    this.api.updateUser(this.user).subscribe(
      result => {
        this.alert.success(result.body.msg);
        this.router.navigate(['users'])
      },
      httpError => {
        this.alert.error(httpError.error.msg);
      }
    )
  }
}
