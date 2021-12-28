import { Content } from '../../models/content';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  contents!: Observable<Content[]>;

  searchForm = new FormControl();

  inputLower!: string;

  array2: string[] = [];

  results: any;


  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.refresh();

    this.loadGenres();

  }

  loadGenres(){
    let teste:any;
    this.api.getCatalog().pipe(
    map((data:any) => data.filter((data:any) => {
      teste = teste +", "+ data.genre
      teste = teste.split(", ");
      teste = teste.toString();
      let tnc = teste.split(",");
      this.array2.push(tnc);
    })),
    map(()=> {
      let kk = this.array2[11];
      let k = Array.from(kk);
      k.shift();
      this.results = k.filter(function(el, i) {
        return k.indexOf(el) === i;
        });
    })
    ).subscribe()
  }

  keypress(){
    this.contents = this.searchForm.valueChanges
    .pipe(
      map(value => value.trim()),
      debounceTime(200),
      map(value => this.inputLower = value.toLowerCase()),
      switchMap(() => this.api.getCatalog()
      .pipe(
        map(data =>
          data.filter((dt:any) => dt.title.toLowerCase().includes(this.inputLower)))
      ))
    )
  }

  filter(teste:any){
    this.contents = this.api.getCatalog()
    .pipe(
      map((data:any) => data.filter((data:any) => data.genre.includes(teste.value))),
      tap(console.log)
    );
  }

  refresh(){
    this.contents = this.api.getCatalog();
  }

}


// this.teste = value.replace(/(?:^|\s)\S/g, (data:any) => data.toUpperCase());
