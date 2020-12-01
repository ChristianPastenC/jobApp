import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  public create(data: {nombre: string, logo: string, descripcion: string }) {
    return this.firestore.collection('empresas').add(data);
  }
  public get(documentId: string) {
    return this.firestore.collection('empresas').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('empresas').snapshotChanges();
  }
  public update(documentId: string, data: any) {
    return this.firestore.collection('empresas').doc(documentId).set(data);
  }
}