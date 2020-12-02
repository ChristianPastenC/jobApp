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
  NbTabsetModule,
  NbRouteTabsetModule,
} from '@nebular/theme';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { VerIndexComponent } from './ver-index/ver-index.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpleosComponent } from './empleos/empleos.component';
import { OfertasComponent } from './ofertas/ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerIndexComponent,
    EmpresasComponent,
    LoginComponent,
    EmpleosComponent,
    OfertasComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'dark'}),
    
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbMenuModule,
    NbCardModule,
    NbSearchModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
