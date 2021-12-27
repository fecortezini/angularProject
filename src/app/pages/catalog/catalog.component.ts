import { Content } from '../../models/content';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  genres = [
    'Ação','Shounen', 'Sobrenatural', 'Militar', 'Aventura', 'Fantasia'
  ]
  contents!: Observable<Content[]>;

  lol!: Observable<Content[]>;

  baseUrl = "http://localhost:3500/";

  searchForm = new FormControl();

  inputLower!: string;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.refresh();
  }
  keypress(){
    this.contents = this.searchForm.valueChanges
    .pipe(
      map(value => value.trim()),
      debounceTime(200),
      map(value => this.inputLower = value.toLowerCase()),
      switchMap(() =>  this.api.getCatalog()
      .pipe(
        map(data =>
          data.filter((dt:any) => dt.title.toLowerCase().includes(this.inputLower)))
      ))
    )
  }
  refresh(){
    this.contents = this.api.getCatalog();
  }

}


// this.teste = value.replace(/(?:^|\s)\S/g, (data:any) => data.toUpperCase());
