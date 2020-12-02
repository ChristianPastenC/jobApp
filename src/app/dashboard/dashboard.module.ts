import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { 
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbButtonModule,
  NbTabsetModule,
  NbCardModule,
} from '@nebular/theme';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,

    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbMenuModule,
    RouterModule,
    NbButtonModule,
    NbTabsetModule,
    NbCardModule,
    NbMenuModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    MenuComponent
  ]
})
export class DashboardModule { }
