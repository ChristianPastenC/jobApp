import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerIndexComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
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
