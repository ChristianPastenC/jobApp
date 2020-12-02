import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VerIndexComponent } from '../ver-index/ver-index.component';
import { EmpresasComponent } from '../empresas/empresas.component';
import { EmpleosComponent } from '../empleos/empleos.component';
import { OfertasComponent } from '../ofertas/ofertas.component';


const routes: Routes = [
    { path: '',
      component: HomeComponent,
      children: [
        { path: '', component: VerIndexComponent},
        { path: 'Empresas', component: EmpresasComponent},
        { path: 'Empleos', component: EmpleosComponent},
        { path: 'Ofertas', component: OfertasComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }