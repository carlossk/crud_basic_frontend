import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { HeaderComponent } from './components/common/header/header.component';
import { MzNavbarModule } from 'ngx-materialize';
import { HomeComponent } from './components/home/home.component';
import { CrudLaravelComponent } from './components/crud-laravel/crud-laravel.component';
import { MzTextareaModule } from 'ngx-materialize';
import { MzCollectionModule } from 'ngx-materialize';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudFirebaseComponent } from './components/crud-firebase/crud-firebase.component';
import { MzValidationModule } from 'ngx-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CrudLaravelComponent,
    CrudFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzIconModule,
    MzIconMdiModule,
    MzModalModule,
    MzSidenavModule,
    MzNavbarModule,
    MzTextareaModule,
    MzCollectionModule,
    FormsModule,
    HttpClientModule,
    MzValidationModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
  ],
  providers: [AngularFirestore, {provide: FirestoreSettingsToken, useValue: { }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
