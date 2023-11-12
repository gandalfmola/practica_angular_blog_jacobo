import { Component, inject } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  paisesMostrar:any[] = []

  paisesService = inject(PaisesService)


  async ngOnInit() {
    const response = await this.paisesService.getAll()
    console.log(response);
    
    console.log(response[1].currencies);
    this.paisesMostrar = response
    
  }

}
