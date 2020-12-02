import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VerIndexComponent } from '../ver-index/ver-index.component';
import { EmpresasComponent } from '../empresas/empresas.component';
import { EmpleosComponent } from '../empleos/empleos.component';

const routes: Routes = [
    { path: '',
      component: HomeComponent,
      children: [
        { path: '', component: VerIndexComponent},
        { path: 'Empresas', component: EmpresasComponent},
        { path: 'Empleos', component: EmpleosComponent},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }