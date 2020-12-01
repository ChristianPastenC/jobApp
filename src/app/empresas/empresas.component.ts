import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  public empresas = [];

  constructor(private firestoreService: EmpresaService) 
  { }

  ngOnInit(): void {
    
    // this.firestoreService.gets().subscribe((Snapshot) => {
    //   this.empresas = [];
    //   Snapshot.forEach((Data: any) => {
    //     this.empresas.push({
    //       id: Data.payload.doc.id,
    //       data: Data.payload.doc.data()
    //     });
    //   })
    // });
  }

}
