import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Content } from 'src/app/models/content';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css']
})
export class ContentViewerComponent implements OnInit {

  title!: string;

  content!: Content;

  eps!: number;

  array!: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['title'])
    ).subscribe(
      data => this.title = data
    )

    this.api.getCatalog().pipe(
      map(data => data.filter((data:any) => data.title == this.title))
    ).subscribe(data => {
      this.content = data[0]
      this.eps = parseInt(this.content.eps);
      this.array = Array.from({length: this.eps},
        (_, index) => index +1)
        .map(eps => "Episódio " + eps);
      console.log(this.array);
    });
    //console.log(this.eps);
  }

}
