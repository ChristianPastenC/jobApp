import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
    private router: Router) { 
  }

  ngOnInit(): void {
  }
  signIn(){
    this.router.navigate(['/login']);
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
