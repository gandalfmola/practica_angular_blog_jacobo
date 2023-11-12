import { Component, inject } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {

  arrDivisas:any;

  divisasService = inject(DivisasService)

  async ngOnInit() {
    const response = await this.divisasService.getAll()
    console.log(response);
    
    

    // así convertimos un objeto en un array de arrays, en cada mini-array va un par clave:valor [[clave, valor],[clave,valor] y así para cada par clave:valor que tuviera el objeto]
    const prueba = Object.entries(response.rates)
    console.log(prueba[0][0]);   
    console.log(typeof prueba); 
    // así convertimos un objeto en un array con las claves, cada clave es un elemento del array
    const prueba2 = Object.keys(response.rates)
    console.log(prueba2);
    console.log(typeof prueba2); 
    // así convertimos un objeto en un array con los valores, cada valor es un elemento del array
    const prueba3 = Object.values(response.rates)
    console.log(prueba3);
    
    
    
    this.arrDivisas = prueba
    
  }

}
