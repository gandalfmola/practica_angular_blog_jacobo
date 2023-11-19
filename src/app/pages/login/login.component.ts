import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorLogin:boolean = false;

  router = inject(Router)  

  loginService = inject(LoginService)

  login:FormGroup;   

  constructor() {
    this.login = new FormGroup({      
      userName: new FormControl(),
      password: new FormControl()
    })
  }


  ngOnInit() {
    this.loginService.getAll()
    console.log("arrUsuarios al ir al Login");    
    console.log(this.loginService.getAll());
    
  }


  envioLogin() {
    console.log(this.login.value);
    
     if (this.loginService.loginControl(this.login.value) ) {
      localStorage.setItem("Login","true")
      this.router.navigate(["/posts"])
      console.log("Has entrado");

      //****************************** */
      localStorage.setItem("autor",this.login.value.userName)
      //****************************** */

    } else {
      this.errorLogin = true
    }
  }



}
