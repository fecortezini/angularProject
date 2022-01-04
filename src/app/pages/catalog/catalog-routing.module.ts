import { AuthsGuard } from './../../guards/guards.guard';
import { EditContentComponent } from './edit-content/edit-content.component';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';
import { AddContentComponent } from './add-content/add-content.component';
import { CatalogComponent } from './catalog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'catalogo',
    component: CatalogComponent
  },
  {
    path: 'new',
    component: AddContentComponent
  },
  {
    path: 'viewer/:title' ,
    component: ContentViewerComponent
  },
  {
    path: 'viewer/:title/update',
    component: EditContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
