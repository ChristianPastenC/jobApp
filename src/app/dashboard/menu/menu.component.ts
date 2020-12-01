import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent  {

  constructor() { }  
}
