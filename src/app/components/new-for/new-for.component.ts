import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-for',
  templateUrl: './new-for.component.html',
  styleUrls: ['./new-for.component.css']
})
export class NewForComponent {

  formulario: FormGroup;

  postService = inject(PostService)

  router = inject(Router)

  //********************************************************************** 
  
  htmlContent:string = ""

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    translate: 'yes',
    sanitize: true,

    height: '10rem',
    minHeight: '5rem',
    width: 'auto',

    enableToolbar: true,

    showToolbar: true,

    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };

  //-------------------------------------------------------------


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
