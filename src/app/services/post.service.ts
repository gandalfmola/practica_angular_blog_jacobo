import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/interface.post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: IPost[] = []

  arrCategorias: IPost[] = []

  constructor() {
    this.arrPosts = [
      {
        titulo:"Recordando una de las mayores crisis del siglo",
        texto:"Ahora que Oriente Próximo vuelve a ser noticia por la guerra, o como queramos llamarlo, entre Palestina e Israel no está de más desempolvar los libros de historia para recordar como terminaron conflictos similar. Hace justo 50 años el mundo vivió una de las crisis económicas más duras que se recuerda, la primera crisis del petróleo o el “shock” del petróleo, fue un acontecimiento decisivo en la historia económica y política del siglo XX. Este evento no solo transformó la geopolítica global y el equilibrio de poder, sino que también tuvo profundas implicaciones económicas a nivel mundial. En EEUU miles de gasolineras se quedaron sin carburante.",
        autor: "Fulano",
        imagen:"https://romuloparraabogado.com/wp-content/uploads/2016/11/Trabajo-en-negro-2.jpg",
        fecha: new Date,
        categoria:"Actualidad"
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

  getByCategoria(categoria:string) {
    const arrCategorias:any = []
    
    if (categoria === "") return this.getAll()

    for (let post of this.arrPosts) {      
            
      if (post.categoria === categoria) {        
        arrCategorias.push(post)
      }
    }
    return arrCategorias
  }


}
