import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { Content } from '../../../models/content';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  file!: File;

  oldFile!: string;

  content!: Content;

  title!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private alert: AlertService,
    private http: HttpClient,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.content = new Content();

    this.route.params.pipe(
      map(params => params['title'])
    ).subscribe(
      data => this.title = data
    )
    this.api.getCatalog().pipe(
      map(data => data.filter((data:any) => data.title == this.title))
    ).subscribe(data => {
      //console.log(data[0]);
       this.content = data[0]
       this.oldFile = data[0].poster;
    })
  }

  redirect(){
    this.router.navigate(['catalogo/viewer', this.content.title])
  }

  onSelectedFiles(event: any){
    this.file = <File>event.target.files[0];
  }

  updateContent(){
    try {
      const fd = new FormData();

      //fd.append('id', this.content.id)
      fd.append('title', this.content.title)
      fd.append('eps', this.content.eps)
      fd.append('genre', this.content.genre)
      fd.append('description', this.content.description)
      fd.append('aired', this.content.aired)
      fd.append('duration', this.content.duration)
      fd.append('type', this.content.type)
      fd.append('status', this.content.status)
      fd.append('rating', this.content.rating)
      fd.append('score', this.content.score)
      fd.append('producer', this.content.producer)
      fd.append('studio', this.content.studio)

      fd.append('poster', this.file, this.file.name)

      this.api.updateContent(fd, parseInt(this.content.id)).subscribe(
        res => {
          this.alert.success(res.body.msg);
          this.router.navigate(['viewer', this.content.title])
        },
        httpError => {
          this.alert.error(httpError.error.msg)
        }
      );

    } catch (error) {
      console.log(error);
    }
  }
}
