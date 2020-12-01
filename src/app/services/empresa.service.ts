import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor( private firestore: AngularFirestore) 
  { }

  //Creando
  public createEmpresa(data: {nombre: string, logo: string, descripcion: string}) {
      return this.firestore.collection('empresas').add(data);
  }
  //Obtiene un
  public getEmpresa(documentId: string) {
    return this.firestore.collection('empresas').doc(documentId).snapshotChanges();
  }
  //Obtiene todo
  public getEmpresas() {
    return this.firestore.collection('empresas').snapshotChanges();
  }
  //Actualizando
  public updateEmpresa(documentId: string, data: any) {
    return this.firestore.collection('empresas').doc(documentId).set(data);
  }
}
