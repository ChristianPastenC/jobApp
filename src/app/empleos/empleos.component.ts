import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../services/empleos.service';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.scss']
})
export class EmpleosComponent implements OnInit {

  empleos: any[] = [];


  constructor(private firestoreService: EmpleosService) {}

  ngOnInit(): void {
  	this.firestoreService.gets().subscribe((Snapshot) => {
       this.empleos = [];
       Snapshot.forEach((Data: any) => {
         this.empleos.push({
           id: Data.payload.doc.id,
           data: Data.payload.doc.data()
         });
       })
     });
  }

}
