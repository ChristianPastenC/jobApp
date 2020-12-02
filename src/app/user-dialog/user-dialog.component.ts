import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { OfertasService } from '../services/ofertas/ofertas.service'

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  usr: string = '';
  userData: any = [];
  ofertas: any[] = [];

  constructor(
    private usrSrv: UsersService,
    private ofertaSrv: OfertasService
  ) { }

  ngOnInit(): void {
    this.usrSrv.get(this.usr).subscribe(res => {
      this.userData = res;
    });
    this.ofertaSrv.getServicesOf(this.usr).subscribe((Snapshot) => {
      this.ofertas = [];
      Snapshot.forEach((Data: any) => {
        this.ofertas.push({
          id: Data.payload.doc.id,
          data: Data.payload.doc.data()
        });
      })
    });

  }

}
