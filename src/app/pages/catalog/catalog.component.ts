import { AuthsGuard } from './../../guards/guards.guard';
import { Content } from '../../models/content';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { data } from 'jquery';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  contents!: Observable<Content[]>;

  searchForm = new FormControl();

  itemsNumber!: number;

  inputLower!: string;

  array2: string[] = [];

  results: any;


  constructor(
    private api: ApiService,
    public auth: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.refresh();

    this.loadGenres();

  }

  loadGenres(){
    let teste: any;
    this.api.getCatalog().pipe(
    map((data:any) => data.filter((dt:any) => {
      this.itemsNumber = data.length-1;
      //console.log(this.itemsNumber);
      teste = teste +", "+ dt.genre
      teste = teste.split(", ");
      teste = teste.toString();
      let tnc = teste.split(",");
      this.array2.push(tnc);
    })),
    map(()=> {
      //console.log(this.array2.length);
      let kk = this.array2[this.itemsNumber];
      let k = Array.from(kk);
      var filtered = k.filter(function (el) {
        return el != null;
      });
      //console.log(filtered);
      this.results = filtered.filter(function(el, i) {
        return k.indexOf(el) === i;
      });
      //console.log(this.results);
      this.results.shift()
     // console.log(this.results);
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
      //tap(console.log)
    );
  }

  refresh(){
    this.loadGenres();
    this.contents = this.api.getCatalog();
  }

}


// this.teste = value.replace(/(?:^|\s)\S/g, (data:any) => data.toUpperCase());
