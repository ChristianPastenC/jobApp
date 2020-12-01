import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent  {

  constructor() { }
  
  items = [
    {
      title: 'Empresas',
      link: '/empresas'
    },
    {
      title: 'Empleos',
      link: '/empleos'
    },
    {
      title: 'Oficios',
      link: '/oficios'
    }
  ];  

}
