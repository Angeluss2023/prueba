import { Component, Input } from '@angular/core';
import { Carrera } from '../domain/carrera';
import { CarrerasService } from '../services/carreras.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent {
//@Input() lista:ListasComponent;

listadoCarrera: Carrera[];
//contacto: Contacto = new Contacto();

constructor(private carreraService: CarrerasService,
    private router: Router) {
  this.listadoCarrera = carreraService.getList()
  console.log('listadoContactos', this.listadoCarrera)
  //this.contacto = contactoService.contacto
  
}

editar(carrera: Carrera){
  let params: NavigationExtras = {
    queryParams: {
      id: carrera.idCarrera,
      nombreCarrera: carrera.nombreCarrera
    }
  }
  this.router.navigate(['pagina/editar'], params)
}


  eliminar(carrera: Carrera) {
    this.carreraService.delete(carrera.idCarrera);
    this.listadoCarrera= this.carreraService.getList();
    
  }
}