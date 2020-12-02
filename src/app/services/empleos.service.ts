import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  constructor(private firestore: AngularFirestore) {}

  public create(data: {nombre: string, ubicacion: string, descripcion: string }) {
    return this.firestore.collection('jobs').add(data);
  }
  public get(documentId: string) {
    return this.firestore.collection('jobs').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('jobs').snapshotChanges();
  }
}
