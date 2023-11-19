import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/interface.post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: IPost[] = []

  arrCategorias: string[] = []

  constructor() {
    console.log("esto es local arrposts");    
    console.log(localStorage.getItem("arrPosts"));
    

    if(localStorage.getItem("arrPosts")) {
      console.log("por aqui pasa");
      
      this.arrPosts = JSON.parse(localStorage.getItem("arrPosts")!)
    } else {
      console.log("por el Else");
      
      this.arrPosts = [
        {
          titulo:"Recordando una de las mayores crisis del siglo",
          texto:"Ahora que Oriente Próximo vuelve a ser noticia por la guerra, o como queramos llamarlo, entre Palestina e Israel no está de más desempolvar los libros de historia para recordar como terminaron conflictos similar. Hace justo 50 años el mundo vivió una de las crisis económicas más duras que se recuerda, la primera crisis del petróleo o el “shock” del petróleo, fue un acontecimiento decisivo en la historia económica y política del siglo XX. Este evento no solo transformó la geopolítica global y el equilibrio de poder, sino que también tuvo profundas implicaciones económicas a nivel mundial. En EEUU miles de gasolineras se quedaron sin carburante.",
          autor: "Antonio",
          imagen:"https://romuloparraabogado.com/wp-content/uploads/2016/11/Trabajo-en-negro-2.jpg",
          fecha: new Date,
          categoria:"Actualidad"
        },
        {
          titulo:"Cambios de normativa en la FÓRMULA 1",
          texto:"La Fórmula 1 está en constante evolución y el reglamento técnico y deportivo que la rige se modifica regularmente para mejorar la seguridad y mantener a raya el insaciable apetito de desarrollo de los equipos.Las últimas modificaciones para la temporada 2022 se han descrito como las mayores en cuatro décadas, con un nuevo y radical conjunto de normas centradas principalmente en el incremento del espectáculo, a pesar de que la pasada temporada fue una de las más dramáticas que se recuerdan, en parte, gracias a la continuidad del reglamento de 2020.",
          autor: "Javier",
          imagen:"https://media.contentapi.ea.com/content/dam/ea/f1/f1-23/common/articles/sports-update/eas-f123-f1sportsupdate.jpg.adapt.crop191x100.628p.jpg",
          fecha: new Date,
          categoria:"Deportes"
        },
        {
          titulo:"Ya tenemos el recorrido del Tour de Francia 2024",
          texto:"La 111ª edición del Tour de Francia se disputará unos días antes de lo habitual debido a la disputa de los Juegos Olímpicos en la capital gala, comenzando el 29 de junio en Florencia y finalizará el 21 de julio en Niza. Por primera vez en su historia, la ronda gala se iniciará en Italia con una primera etapa entre Florencia y Rímini, a orillas el Adriático en Emilia-Romaña; la prueba proseguirá entre Cesenatico y Bolonia y atravesará a continuación el país en dirección del Piamonte, culminando la estancia del pelotón en Turín el 1 de julio. La conquista del maillot amarillo continuará con la llegada de la carrera en Francia, en una cuarta etapa que llevará al pelotón al puerto del Galibier; después por los caminos blancos de los alrededores de Troyes; a una contrarreloj en Borgoña; al Macizo Central en Le Lioran o a los Pirineos en el Plateau de Beille el 14 de julio; y de nuevo a los Alpes del Sur, donde se igualará un récord de altitud en la cima de la Bonnette.",
          autor: "María",
          imagen:"https://www.estadiodeportivo.com/imagenes/7be0cc4f-e5a2-4b54-b121-c8319c6ca3ca_1200x680.jpeg",
          fecha: new Date,
          categoria:"Deportes"
        },
        {
          titulo:"La nueva Legislatura echa a andar",
          texto:"El Rey Felipe VI ha recibido este viernes en el Palacio de la Zarzuela a la nueva presidenta del Congreso, Francina Armengol, cumpliendo así con el trámite necesario para la organización de la ronda de consultas con los partidos de cara a la investidura del próximo presidente del Gobierno.   Armengol ha sido recibida por el monarca a las 10.30 horas con el fin de informar al jefe del Estado de la constitución del Congreso que se produjo este jueves tras ser elegida presidenta de la Cámara con el apoyo de 178 diputados --los de PSOE, Sumar, PNV, Bildu, Junts y ERC-",
          autor: "Luis",
          imagen:"https://fotografias.lasexta.com/clipping/cmsimages02/2016/05/02/782CCE8D-B801-47EF-BC52-B70B46D8446F/58.jpg",
          fecha: new Date,
          categoria:"Politica"
        },
        {
          titulo:"A vueltas con el precio de la vivienda",
          texto:"El precio de la vivienda suma por décimo trimestre consecutivo un incremento por encima del 3%. Concretamente, en el segundo periodo de este año la subida fue del 3,5% con respecto a la misma fecha del año 2022, aunque se vivió una deceleración respecto al primer trimestre, cuando el aumento fue del 6,4% interanual. Los expertos coinciden en que se está produciendo un enfriamiento gradual del mercado, una desaceleración, aunque -por el momento- los precios de compraventa no bajarán. El 2023 cerrará con un incremento anual de entre el 1,5% y el 2,5%, según las previsiones de Solvia recogidas en el II Solvia Market View 2023",
          autor: "Ana",
          imagen:"https://www.echeverrimontes.com/hubfs/La%20arquitectura%20de%20la%20vivienda%20colectiva.png",
          fecha: new Date,
          categoria:"Economia"
        },
        {
          titulo:"El BCE al fin frena la subida de tipos",
          texto:"El Banco Central Europeo (BCE) ha decidido este jueves echar el freno después de 10 subidas consecutivas de tipos que han dejado el precio del dinero en el 4,5%, una cota inédita desde 2001. “El Consejo de Gobierno ha decidido hoy [jueves] mantener sin variación los tres tipos de interés oficiales”, ha anunciado la presidenta de la institución, Christine Lagarde. Fráncfort ha optado por poner fin a la mayor escalada de su historia, dando al menos un respiro a los más de cinco millones de hogares españoles que tienen una hipoteca a tipo variable.",
          autor: "David P",
          imagen:"https://www.cde.ual.es/wp-content/uploads/2022/07/subida-tipos-de-interes-BCE.png",
          fecha: new Date,
          categoria:"Economia"
        },
      ]
      console.log(this.arrPosts);
      
    }  

  } 


  getAll() {
    if(localStorage.getItem("arrPosts"))
    this.arrPosts = JSON.parse(localStorage.getItem("arrPosts")!)   

    return this.arrPosts
  }

  getCategorias() {
    for(let post of this.arrPosts) {
      if (this.arrCategorias.includes(post.categoria) === false) {
        this.arrCategorias.push(post.categoria)
      }      
    }

    return this.arrCategorias
  }

  createPost(post:IPost) {
    this.arrPosts.push(post)
    localStorage.setItem("arrPosts", JSON.stringify(this.arrPosts))
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

  toCapitalizeWords(frase:string) {
    let res = frase.split(" ")      
    let resultado = []
        
    for (let palabra of res) {      
      resultado.push(palabra.replace(/^\w/, (c:any) => c.toUpperCase()))
    }
    
    return resultado.join(" ")
  }



}
