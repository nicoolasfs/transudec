import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    console.log("Antes de llamar al servicio");
    this.departamentoService.listar().subscribe(data =>{
      console.log(data);
      data.forEach(element =>{

      console.log(`Código: ${element.idDepartamento} - Nombre: ${element.nombre}`);
      
    });
  });
}

}
