import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/interface.post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: IPost[] = []

  constructor() {
    this.arrPosts = [
      {
        titulo:"POST DE PRUEBA",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae quasi quas enim autem. Iure minima recusandae a. Quo animi ratione itaque quos. Voluptatum sint sequi, voluptate beatae quisquam perferendis.",
        autor: "Fulano",
        imagen:"https://previews.123rf.com/images/freud/freud1708/freud170800078/84636787-ilustraci%C3%B3n-de-dibujos-animados-de-un-mono-pensando.jpg",
        fecha: new Date,
        categoria:"Pruebas"
      },
      {
        titulo:"CAMBIOS DE NORMATIVA EN LA FÓRMULA 1",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae quasi quas enim autem. Iure minima recusandae a. Quo animi ratione itaque quos. Voluptatum sint sequi, voluptate beatae quisquam perferendis.",
        autor: "Fulano",
        imagen:"https://previews.123rf.com/images/freud/freud1708/freud170800078/84636787-ilustraci%C3%B3n-de-dibujos-animados-de-un-mono-pensando.jpg",
        fecha: new Date,
        categoria:"Deportes"
      },
      {
        titulo:"TOUR DE FRANCIA 2024",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae quasi quas enim autem. Iure minima recusandae a. Quo animi ratione itaque quos. Voluptatum sint sequi, voluptate beatae quisquam perferendis.",
        autor: "Fulano",
        imagen:"https://previews.123rf.com/images/freud/freud1708/freud170800078/84636787-ilustraci%C3%B3n-de-dibujos-animados-de-un-mono-pensando.jpg",
        fecha: new Date,
        categoria:"Deportes"
      },
      {
        titulo:"¿HABRÁ LEGISLATURA??",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae quasi quas enim autem. Iure minima recusandae a. Quo animi ratione itaque quos. Voluptatum sint sequi, voluptate beatae quisquam perferendis.",
        autor: "Fulano",
        imagen:"https://previews.123rf.com/images/freud/freud1708/freud170800078/84636787-ilustraci%C3%B3n-de-dibujos-animados-de-un-mono-pensando.jpg",
        fecha: new Date,
        categoria:"Politica"
      },
      {
        titulo:"SUBE EL PRECIO DE LA VIVIENDA",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae quasi quas enim autem. Iure minima recusandae a. Quo animi ratione itaque quos. Voluptatum sint sequi, voluptate beatae quisquam perferendis.",
        autor: "Fulano",
        imagen:"https://previews.123rf.com/images/freud/freud1708/freud170800078/84636787-ilustraci%C3%B3n-de-dibujos-animados-de-un-mono-pensando.jpg",
        fecha: new Date,
        categoria:"Economia"
      },
    ]
  }


  getAll() {
    return this.arrPosts
  }

  createPost(post:IPost) {
    this.arrPosts.push(post)
  }

  getByCategoria() {

  }


}
