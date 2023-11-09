import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-for',
  templateUrl: './new-for.component.html',
  styleUrls: ['./new-for.component.css']
})
export class NewForComponent {

  formulario: FormGroup;

  postService = inject(PostService)

  router = inject(Router)

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor:new FormControl(),
      imagen:new FormControl(),
      fecha:new FormControl(),
      categoria:new FormControl()
    })
  }

  envioFor() {
    console.log(this.formulario.value);
    this.postService.createPost(this.formulario.value)
    this.router.navigate(["posts"])
  }

}
