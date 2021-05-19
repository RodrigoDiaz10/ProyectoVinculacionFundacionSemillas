import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { PatrocinadoresAdminComponent } from './patrocinadores-admin/patrocinadores-admin.component';
import { NinosAdminComponent } from './ninos-admin/ninos-admin.component';
import { AlbumnesAdminComponent } from './albumnes-admin/albumnes-admin.component';
import { VoluntariosAdminComponent } from './voluntarios-admin/voluntarios-admin.component';


@NgModule({
  declarations: [BlogAdminComponent,
    PatrocinadoresAdminComponent,
    NinosAdminComponent,
    AlbumnesAdminComponent,
    VoluntariosAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
