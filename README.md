# Angular13Keycloak

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

For run this project you need changes the next ts

Note: if you up your angular app in different host and port than keycloack you will have across origin.

## login.component.ts
  * const body = new HttpParams()
  * .set("username", this.loginForm.value.username) //username by login
  *  .set("password", this.loginForm.value.password) // password by login
  *  .set("grant_type", "password") 
  *  .set("client_id", "springboot-keycloack")  // here your realms cliend id from keycloak
  *  .set("client_secret", "") //by default realms will created emtpy from keycloak
  *  .set("scope", "openid"); 


## auth.service.ts
function:
 - currentloginid
    * Put here your real realms in my case the name realms the name is demo2 and up in the port 9080
    
    fetch('http://127.0.0.1:9080/auth/realms/demo2/protocol/openid-connect/token'

* sometimes, dependes your configuration your realm or customer oauth2 with jwt or ldap the username will come the next way
     * username -> normal configuration
     * user_name -> customer configuration 
     * preferred_username -> ldap
     
* Check the next function or method and set the correct, for will know what is the correct username you can check access_token on  [JWT IO](https://jwt.io/)
  - user 
  - isAuthenticated
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
