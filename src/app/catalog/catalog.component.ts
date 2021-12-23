import { Content } from './../models/content';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  contents!: Observable<Content[]>;
  
  baseUrl = "http://localhost:3500/";

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.contents = this.api.getCatalog();
  }
}
