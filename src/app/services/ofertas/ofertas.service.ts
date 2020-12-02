import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private firestore: AngularFirestore) { }

  public create(documentId :string, data: {nombre: string, oficio: string, experiencia: string, telefono: string, ubicacion: string }) {
    return this.firestore.collection('users/'+documentId+'/servicios').add(data);
  }
  public getServicesOf(documentId: string) {
    return this.firestore.collection('users/'+documentId+'/servicios').snapshotChanges();
  }
  
}
