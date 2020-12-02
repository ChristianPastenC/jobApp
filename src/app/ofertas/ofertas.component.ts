import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { NbDialogService } from '@nebular/theme';
import { UserDialogComponent } from '../user-dialog/user-dialog.component'; 

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  public users: any[] = [];

  constructor(
                private firestoreServiceA: UsersService,
                private dialogService: NbDialogService, ) 
  { }

  ngOnInit(): void {
    this.firestoreServiceA.gets().subscribe((Snapshot) => {
      this.users = [];
      Snapshot.forEach((Data: any) => {
        this.users.push({
          id: Data.payload.doc.id,
          data: Data.payload.doc.data()
        });
      })
    });
  }

  openDetails(id:string){
    console.log(id);
    this.dialogService.open(UserDialogComponent, {
      context: {
        usr: id,
      },
    });
  }
}
