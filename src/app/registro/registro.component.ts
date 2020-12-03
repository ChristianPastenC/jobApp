import { Component, OnInit } from '@angular/core';

import { Cuenta } from '../models/cuenta.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { NbToastrService } from '@nebular/theme';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  errorMessage = '';
  nuevaCuenta: Cuenta;
  registroForm: FormGroup;
  cuentaForm: FormGroup;

  constructor(
    private storage: AngularFireStorage, 
    private db: AngularFirestore,
    private builder: FormBuilder,
    private afAuth : AngularFireAuth,
    private router: Router,
 //   protected dialogRef: NbDialogRef<RegistroComponent>,
    ) { 
    this.nuevaCuenta = new Cuenta();
    this.registroForm = this.builder.group({
      nombre: ['', Validators.required],
      experiencia: [''],
      oficio: ['', Validators.required],
      telefono: ['', Validators.required],
      ubicacion: ['', Validators.required],
    });

    this.cuentaForm = this.builder.group({
      correo:['', Validators.required],
      pass:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  setDatosInfo(values: Cuenta){
    this.nuevaCuenta.nombre       = values.nombre;
    this.nuevaCuenta.experiencia  = values.experiencia;
    this.nuevaCuenta.oficio       = values.oficio;
    this.nuevaCuenta.telefono     = values.telefono;
    this.nuevaCuenta.ubicacion    = values.ubicacion;
  }
  setCuentaInfo(values: Cuenta){
    this.nuevaCuenta.correo     = values.correo;
    this.nuevaCuenta.pass = values.pass;
  }

  registrar(){
    this.db
    .collection('users')
    .add(JSON.parse(JSON.stringify(this.nuevaCuenta)))
    .then(() => {
      console.log('Usuario Creado');
      this.createUser();
    })
    .catch(() => {
      console.log('Cuenta no rreada')
    });
    // this.cuentaSrv.crearCuenta(this.nuevaCuenta);
    //this.createUser();
  }
  createUser(){
    this.afAuth.createUserWithEmailAndPassword(this.nuevaCuenta.correo, this.nuevaCuenta.pass).then(() => {
      this.router.navigate(['']);
    }).catch(response => {
      this.errorMessage = response.message;
    });
  }

  close() {
    //this.dialogRef.close();
  }
}
