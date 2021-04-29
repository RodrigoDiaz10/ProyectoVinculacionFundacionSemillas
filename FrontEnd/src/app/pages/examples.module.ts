import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ImagenesComponent } from './galeria/imagenes/imagenes.component';
import {CardModule} from 'primeng/card';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CardModule,
        NgImageFullscreenViewModule,
        MatSelectModule,
    ],
    declarations: [
        LandingComponent,
        ProfileComponent,
        LoginComponent,
        BlogComponent,
        RegisterComponent,
        GaleriaComponent,
        ImagenesComponent
    ]
})
export class ExamplesModule { }
