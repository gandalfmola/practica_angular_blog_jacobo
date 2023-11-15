import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorLogin:boolean = false;
  

  loginService = inject(LoginService)

  login:FormGroup;   

  constructor() {
    this.login = new FormGroup({      
      email: new FormControl(),
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
      console.log("Has entrado");            
    } else {
      this.errorLogin = true
    }
  }



}
