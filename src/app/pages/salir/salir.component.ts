import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.component.html',
  styleUrls: ['./salir.component.css']
})
export class SalirComponent {

  loginService = inject(LoginService)

  router = inject(Router)

  ngOnInit() {

    localStorage.removeItem("Login")
    console.log("Has salido");   
    localStorage.removeItem("autor") 

    setTimeout(()=>{
      this.router.navigate(["posts"])
    }, 2000)    
    
  }

}
