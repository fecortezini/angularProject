import { AlertService } from './../../services/alert.service';
import { ApiService } from './../../services/api.service';
import { Content } from './../../models/content';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  file!: File;

  oldFile!: string;

  content!: Content;

  title!: string;

  constructor(
    private _location: Location,
    private api: ApiService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.content = new Content()
  }

  redirect(){
    this._location.back();
  }

  onSelectedFiles(event: any){
    this.file = <File>event.target.files[0];
  }

  addContent(){
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

      this.api.addContent(fd).subscribe(
        result => {
          this.alert.success(result.body.msg);;
          this._location.back();
        },
        httpError => {
          this.alert.error(httpError.error.msg);
        }
    )
    } catch (error) {
      console.log(error);
    }
  }
}
