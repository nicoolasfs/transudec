import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ciudad, Departamento } from '../_model/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

private url: string = `${environment.HOST}/departamentos`;
  
constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get<Departamento[]>(`${this.url}/listar`);
  }
  public listarpordepto(idDepartamento: Departamento){
    const url = `${this.url}?idDepartamento=${idDepartamento}`;
    return this.http.get<Ciudad[]>(`${this.url}/ciudad/listarPorDepartamnto`);
  }
}


  
