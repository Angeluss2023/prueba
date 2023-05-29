import { Component } from '@angular/core';
import { Carrera } from '../domain/carrera';
import { CarrerasService } from '../services/carreras.service';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {
  carrera:Carrera={idCarrera:0,nombreCarrera:'',DescripcionCarrera:''}

  constructor(private route: ActivatedRoute, private router: Router, private carreraService: CarrerasService) {
    this.route.queryParams.subscribe(params => {
      const idCarrera = params['id'];
      const carreraRecuperada = this.carreraService.getCarreraId(idCarrera);

      // Solo actualizamos si el objeto no es nulo ni indefinido
      if (carreraRecuperada) {
        this.carrera = carreraRecuperada;
      }
    });
  }
  guardar() {
    this.carreraService.update(this.carrera.idCarrera, this.carrera);
    this.router.navigate(['pagina/listas'])
  }
}
