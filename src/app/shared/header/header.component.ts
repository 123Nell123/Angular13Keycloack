import { Component } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router, ActivationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { AuthService } from "../../services/auth/login/auth.service"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  shouldRun = true;
  mobileQuery: MediaQueryList;
  menus = [];
  titulo = "";
  imagen = "./assets/img/logo.png";

  constructor(
    media: MediaMatcher,
    public _authService: AuthService,
    public router: Router,
    public title: Title
  ) {
  
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
   
  }

}