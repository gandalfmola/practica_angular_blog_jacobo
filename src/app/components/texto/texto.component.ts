import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {

  @Input() textoMostrar:any;

  @Input() leerMasTexto:boolean = false

}
