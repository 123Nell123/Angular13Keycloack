import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}

  login(loginPayload: any) {
    
    var splitted = loginPayload.split("&"); 
    let payMod =  splitted[0]+"&"+`password=${encodeURIComponent(splitted[1].split("=")[1])}`+"&"+splitted[2]+"&"+splitted[3]+"&"+splitted[4]+"&"+splitted[5];
  // let payMod =  splitted[0]+"&"+`password=${encodeURIComponent(splitted[1].split("=")[1])}`+"&"+splitted[2]+"&"+splitted[3];
    console.log("loginPayload  " + payMod);
    return this.currentloginid(payMod);
  }

  async currentloginid(payMod: any) {
    //changes this url by your realms 
    try {
      console.log("Current login")
       // http://localhost:8080/admin/master/console/#/Starlux/realm-settings/tokens
      //const response = await fetch('http://127.0.0.1:9080/auth/realms/demo2/protocol/openid-connect/token', {
        const response = await fetch('http://localhost:8080/realms/angu13/protocol/openid-connect/token', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: payMod,
     
      });
      console.log("prepare response");
     
      const data = await response.json();
      console.log("data",data);
      return data;
    } catch (error) {
      console.log('Request failed', error);
    }
  }

  user(): string {
    const payload = this.getDataToken(this.token);
    /**
     * changes
     * username -> normal configuration
     * user_name -> customer configuration 
     * preferred_username -> common on ldap
     * */ 
    return payload.username;
  }

  public get token(): string {

    let resul:any;

    if (sessionStorage.getItem('token') != null) {
      resul= sessionStorage.getItem('token');
      console.log("y a un token")
    }
    return resul;
  }

  saveToken(accessToken: string): void {
    sessionStorage.setItem('token', accessToken);
  }

  getDataToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    const payload = this.getDataToken(this.token);
    console.log("on est identifie")
    /**
     * changes 
     * username -> normal configuration
     * user_name -> customer configuration 
     * preferred_username -> common on ldap
     * */ 

    if (payload != null && payload.username && payload.username.length > 0) {
      return true;
    }
    return false;
  }

  logout(): void {
    console.log("logout")
    sessionStorage.clear();
  }
}
