import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registro:FormGroup;

  nuevoUsuario:any;

  loginService = inject(LoginService)

  router = inject(Router)  

  constructor() {
    this.registro = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
    this.loginService.getAll()
  }

  envioFor() {    
    this.nuevoUsuario = this.registro.value    
    this.loginService.addUser(this.nuevoUsuario)

    localStorage.setItem("Login","true")
    console.log("Has entrado");   
    
    //****************************** */
    localStorage.setItem("autor",this.nuevoUsuario.userName)
    //****************************** */
    
    this.router.navigate(["/posts"])
  }

}
