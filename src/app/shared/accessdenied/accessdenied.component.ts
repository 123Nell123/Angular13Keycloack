import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/login/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-accessdenied',
  templateUrl: './accessdenied.component.html',
  styleUrls: ['./accessdenied.component.scss']
})
export class AccessdeniedComponent implements OnInit {

  constructor(private router: Router, private _AuthService: AuthService) { }

  ngOnInit(): void {
  }

  goBack(){
    this._AuthService.logout();
    this.router.navigate(["/login"]);
  }
}
