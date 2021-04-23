import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RegisterComponent } from './pages/register/register.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ImagenesComponent } from './pages/galeria/imagenes/imagenes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'galeria', component: GaleriaComponent }, 
  { path: 'imagenes/:id', component: ImagenesComponent }, 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
