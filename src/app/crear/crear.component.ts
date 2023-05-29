import { Component } from '@angular/core';
import { Carrera } from '../domain/carrera';
import { CarrerasService } from '../services/carreras.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
 carrera:Carrera={idCarrera:0,nombreCarrera:'',DescripcionCarrera:''}
 constructor(private carrerasService:CarrerasService){
 }

 agregarCarrera(){
  this.carrerasService.save(this.carrera);
  this.carrera={idCarrera:0,nombreCarrera:'',DescripcionCarrera:''};
  
 }
}
