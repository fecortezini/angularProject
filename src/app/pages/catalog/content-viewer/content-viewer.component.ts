import { AlertService } from '../../../services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Content } from 'src/app/models/content';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css']
})
export class ContentViewerComponent implements OnInit, OnDestroy {

  title!: string;

  content!: Content;

  eps!: number;

  array!: any;

  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private alert: AlertService,
    private router: Router,
    public auth: AuthenticationService
  ) { }


  ngOnInit(): void {

    this.route.params.pipe(
      map(params => params['title'])
    ).subscribe(data => this.title = data)

    this.api.getCatalog().pipe(
      map(data => data.filter((data:any) => data.title == this.title))
    ).subscribe(data => {
      this.content = data[0]
      this.eps = parseInt(this.content.eps);
      this.array = Array.from({length: this.eps},
        (_, index) => index +1)
        .map(eps => "Episódio " + eps);
      //console.log(this.array);
    });
  }

  delete(id: string){
    this.api.deleteContent(id).subscribe(
      result => {
        this.alert.success(result.body.msg);
        this.router.navigate(['catalogo']);
      },
      httpError => {
        this.alert.error(httpError.error.msg)
      }
    )
  }


  ngOnDestroy(): void {
  }

}
