import { Injectable } from '@angular/core';
import { Carrera } from '../domain/carrera';
@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  carreras: Carrera []= [];

  save(carrera: Carrera){
    this.carreras.push({ ...carrera });
    //this.contacto = new Contacto()
    console.log(this.carreras);
    
  }

  getList(){
    return this.carreras;
  }

  delete(idCarrera: number){
    const index =this.carreras.findIndex(Carrera => Carrera.idCarrera);
    if(index !==-1){
      this.carreras.splice(index, 1);
    }
  }

  update(idCarrera: number, carreraActualizado: Carrera){
    const index =this.carreras.findIndex(Carrera => Carrera.idCarrera===idCarrera);
    if(index !==-1){
      this.carreras[index]= carreraActualizado;
      return true;
    }
      return false;
  }

  getCarreraId(idCarrera: number): Carrera | undefined{
    return this.carreras.find(Carrera => Carrera.idCarrera === idCarrera);
  }

}
