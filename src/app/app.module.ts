import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from '@angular/fire/auth';

import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarModule,
  NbSearchModule,
  NbInputModule,
  NbToastrModule,
  
  NbDialogModule,
  NbStepperModule,
  NbToggleModule,
  NbFormFieldModule,
  NbAutocompleteModule,
} from '@nebular/theme';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { VerIndexComponent } from './ver-index/ver-index.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerIndexComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    NbInputModule,
    NbToastrModule,
    NbStepperModule,
    NbToggleModule,
    NbDialogModule,
    NbAutocompleteModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'dark'}),
    
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbMenuModule,
    NbCardModule,
    NbSearchModule,
    
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
