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

  postService = inject(PostService)

  ngOnInit() {
    this.arrPostLista = this.postService.getAll()
    console.log(this.arrPostLista);
    
  }

}
