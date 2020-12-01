import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarModule,
  NbSearchModule,
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
