import { Component, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/interface.post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  arrPostLista:IPost[] = []

  arrCategoriasLista:string[] = []

  postService = inject(PostService)

  ngOnInit() {
    this.arrPostLista = this.postService.getAll()
    console.log(this.arrPostLista);   
    this.arrCategoriasLista = this.postService.getCategorias() 
  }

  clickCategoria($event:any) {
    console.log($event.target.value);
    
    this.arrPostLista = this.postService.getByCategoria($event.target.value)
    console.log(this.arrPostLista);
        
  }

  

}
