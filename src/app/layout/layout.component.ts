import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService-2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  user:any;

  constructor(private authSer: AuthService, private router:Router) {
    this.authSer.getUserClaims().then((u) => {
      this.user = u;
      console.log(this.user.displayName);
      console.log(this.user.photoURL);
    })

  }

  logOut():void {
    this.authSer.doLogout().then( () => {
      this.router.navigate(['/login']);
    })
  }



}
