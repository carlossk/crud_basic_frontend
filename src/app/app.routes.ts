import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CrudLaravelComponent } from './components/crud-laravel/crud-laravel.component';
import { CrudFirebaseComponent } from './components/crud-firebase/crud-firebase.component';



const APP_ROUTES: Routes = [

  { path: '', component: HomeComponent },
  { path: 'firebase', component: CrudFirebaseComponent },

  { path: 'laravel', component: CrudLaravelComponent },
  { path: '**', component: HomeComponent },

];

export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES)
