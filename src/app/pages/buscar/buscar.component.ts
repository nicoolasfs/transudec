import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service';
import { Departamento } from 'src/app/_model/Departamento';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
departamentos: Departamento;
  constructor(public departamentoService: DepartamentoService) { }

  ngOnInit(): void {
   /* console.log("Antes de llamar al servicio");
    this.departamentoService.listarpordepto(11).subscribe(data =>{
      console.log(data);
      data.forEach(element =>{

      console.log(`Código: ${element.idCiudad} - Nombre: ${element.nombre}`);
      
    });
  });
}
*/
}
}
