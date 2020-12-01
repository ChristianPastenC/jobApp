import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { 
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbActionsModule,
  NbUserModule,
  NbContextMenuModule,
  NbSelectModule,
  NbMenuModule,
  NbButtonModule
} from '@nebular/theme';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,

    NbThemeModule.forRoot(),
    NbIconModule,
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbSelectModule,
    NbMenuModule,
    RouterModule,
    NbButtonModule,

    NbMenuModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    MenuComponent
  ]
})
export class DashboardModule { }
