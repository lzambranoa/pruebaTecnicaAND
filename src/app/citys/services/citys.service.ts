import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitysService {

  
  public resultados: any[] = [];

  public municipios: any[] = [];

  
  constructor( private http: HttpClient ){}

  extraerData(){

    this.http.get('http://100.24.232.62:8085/api/APruebaTecnica/ObtenerDepartamentos')
      .subscribe((resp: any) => {
        console.log(resp);
        this.resultados = resp;
      })

    
  }

  extraerMunicipio(query: string = ''){
    this.http.get(`http://100.24.232.62:8085/api/APruebaTecnica/ObtenerMunicipios/${query}`)
      .subscribe((resp: any) => {
        console.log(resp);
        this.municipios = resp;
      })
  }


}
