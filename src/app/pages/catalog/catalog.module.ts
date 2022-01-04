import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContentComponent } from './edit-content/edit-content.component';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';
import { AddContentComponent } from './add-content/add-content.component';
import { CatalogComponent } from './catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    CatalogComponent,
    AddContentComponent,
    EditContentComponent,
    ContentViewerComponent
  ]
  ,
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SweetAlert2Module,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogModule { }
