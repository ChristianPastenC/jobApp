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
      route: '/home/home.module',
    },
    {
      title: 'Empresas',
      responsive: true,
      route: [ '/home/home.module' ],
    },
    {
      title: 'Empleos',
      responsive: true,
      route: [ '/home/home.module' ],
    },
    {
      title: 'Ofertas',
      responsive: true,
      route: [ '/home/home.module' ],
    },
  ];
}
