import { Component, OnInit } from '@angular/core';
import { CitysService } from '../services/citys.service';

@Component({
  selector: 'app-citys-page',
  templateUrl: './citys-page.component.html',
  styleUrls: ['./citys-page.component.css']
})
export class CitysPageComponent implements OnInit {



  get resultados() {
    return this.cityService.resultados;
  }

  get municipios() {
    return this.cityService.municipios;
  }

  constructor(private cityService: CitysService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cityService.extraerData();
  }

  // buscar() {
  //   console.log("extrayendo la data....");
  //   this.cityService.extraerData();
  // }

  capturar(event: any) {
    const varSeleccionado = event.target.value;
    this.cityService.extraerMunicipio(varSeleccionado);
  }

}
