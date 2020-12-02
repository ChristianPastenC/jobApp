import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabs: any[] = [
    {
      title: 'Inicio',
      responsive: true,
      route: '',
    },
    {
      title: 'Empresas',
      responsive: true,
      route:  './Empresas' ,
    },
    {
      title: 'Empleos',
      responsive: true,
      //route: [ '' ],
    },
    {
      title: 'Ofertas',
      responsive: true,
      //route: [ '' ],
    },
  ];
}
