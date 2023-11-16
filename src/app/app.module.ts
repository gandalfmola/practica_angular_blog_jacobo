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
import { PaisCardComponent } from './components/pais-card/pais-card.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { SalirComponent } from './pages/salir/salir.component';
import { PreviewPipe } from './pipes/preview.pipe';
import { TextoComponent } from './components/texto/texto.component'

import { AngularEditorModule } from '@kolkov/angular-editor';





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
    PaisCardComponent,
    RegistroComponent,
    LoginComponent,
    SalirComponent,
    PreviewPipe,
    TextoComponent,          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    AngularEditorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
