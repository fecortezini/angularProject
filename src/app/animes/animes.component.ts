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

  users!: Accounts[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getUsers().subscribe(
      data => this.users = data
    );
  }

}
