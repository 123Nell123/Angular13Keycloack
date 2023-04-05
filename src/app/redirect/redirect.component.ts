import { Component, OnInit } from '@angular/core';
//import { UserService } from "../services/user/user.service";
import { AuthService } from '../services/auth/login/auth.service';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styles: [],
})
export class RedirectComponent implements OnInit {

  constructor(
    private authService: AuthService,
    //private _userService: UserService,
    private keycloackService: KeycloakService,
    public router: Router
  ) {
    let  islooged:boolean = false;
    console.log("keycloackServicedepuis redirection");
    this.keycloackService.isLoggedIn().then(() => {
      console.log("logged");
    islooged=true
    this.router.navigate(['/home/']);
    return;
  
  },
     ()=>console.log("Not logged"));

    console.log("fin d'appel");
    // check login
    /*
    if (islooged) {
      console.log("redirection ok")
      this.router.navigate(['/home/']);
      return;
    }
*/
    this.router.navigate(['/login']);
  
 
  }

  ngOnInit() {

    }




  

}
