import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  arrUsuarios: any[] = []

  constructor() {
    if (localStorage.getItem("arrUsuarios")) {
      this.arrUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")!)
    } else {
      this.arrUsuarios = []
    }
    console.log("Esto es localStorage");    
    console.log(this.arrUsuarios);
    

  }

  getAll() {
    // this.arrUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")!)
    return this.arrUsuarios
  }

  addUser(newUser:any) {
    console.log(typeof this.arrUsuarios);
    
    this.arrUsuarios.push(newUser)
    localStorage.setItem("arrUsuarios", JSON.stringify(this.arrUsuarios))    
  }

  loginControl(login:any) {

    if (this.arrUsuarios === null) return false

    for (let usuario of this.arrUsuarios) {
      if (usuario.userName === login.userName && usuario.password === login.password) {
        return true
      }
    }
    return false
  }

  isLoged() {
    if (localStorage.getItem("Login")) {
      return true
    } else {
      return false
    }        
    
  }


}
