import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostCardComponent } from './components/post-card/post-card.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewForComponent } from './components/new-for/new-for.component'

import { HttpClientModule } from '@angular/common/http';
import { DivisasComponent } from './pages/divisas/divisas.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { PaisCardComponent } from './components/pais-card/pais-card.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    FormularioComponent,
    NavBarComponent,
    PostCardComponent,
    NewForComponent,
    DivisasComponent,
    PaisesComponent,
    PaisCardComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
