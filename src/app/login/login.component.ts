import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UsersService } from "./../shared/services/users.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    constructor(
      public router: Router,
      public authenticationServices:UsersService
    ) {}

    ngOnInit() {}

    onLoggedin(formValue:any) {
        this.blockUI.start();
      this.authenticationServices.Authentication(formValue)
        .then(response => {
            localStorage.setItem('currentUser', response.username);
            localStorage.setItem('currentEmail', response.email);
            localStorage.setItem('currentId', response.id);
            localStorage.setItem('currentPicture', response.foto);
            localStorage.setItem('currentState', response.state);
            localStorage.setItem('currentEmail', response.email);
            localStorage.setItem('currentApellidos', response.apellidos);
            localStorage.setItem('currentNombres', response.nombres);
            localStorage.setItem('currentAvatar', response.foto);
            localStorage.setItem('currentRol', response.rol);

            console.clear

                this.blockUI.stop();
                console.log(response);

                  this.router.navigate([`./../home`])
                this.blockUI.stop();

        }).catch(error => {
            console.clear

            this.blockUI.stop();
          if(error.status==401){
            alert("Usuario o Clave incorrectas");
          }else{
            alert("Error: please call to support")
            console.log(error);

          }
          setTimeout(() => {
                this.blockUI.stop();
          }, 500);

        })
        localStorage.setItem('isLoggedin', 'true');
    }
}
