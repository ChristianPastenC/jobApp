import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }

  public create(data: {nombre: string, oficio: string, experiencia: string, telefono: string, ubicacion: string }) {
    return this.firestore.collection('users').add(data);
  }
  public get(documentId: string) {
    return this.firestore.collection('users').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('users').snapshotChanges();
  }
  public update(documentId: string, data: any) {
    return this.firestore.collection('users').doc(documentId).set(data);
  }
}
