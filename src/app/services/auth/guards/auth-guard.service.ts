import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "../login/auth.service";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(
    public router: Router,
    public rt: ActivatedRoute,
    public _authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    /*
    if (this._authService.isAuthenticated) {    
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }*/

  return true;
  }
}
