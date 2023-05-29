import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListasComponent } from './listas/listas.component';
import { CrearComponent } from './crear/crear.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListasComponent,
    CrearComponent,
    EditarComponent,
    AcercaDeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




