import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabinidComponent } from './databinid/databinid.component';
import { ErrorComponent } from './error/error.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'data',
    component:DatabinidComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    component:ErrorComponent  
  },
 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
