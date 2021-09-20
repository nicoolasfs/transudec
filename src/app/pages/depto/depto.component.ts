import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service';
import { Router } from '@angular/router'
import { Departamento } from '../../_model/Departamento'
import { MatTableDataSource } from '@angular/material/table';
import { Ciudad } from '../../_model/Departamento';

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styleUrls: ['./depto.component.css']
})

export class DeptoComponent implements OnInit {
  displayedColumns: string[] = ['idDepartamento', 'nombre', 'actions'];
  dataSource = new MatTableDataSource;
  departamentos: Departamento[];
  ciudades: Ciudad[];
  constructor(private departamentoService: DepartamentoService, private router:Router) { }
  
  ngOnInit(): void {
    console.log("Antes de llamar al servicio");
    this.departamentoService.listar().subscribe(data =>{
      this.dataSource.data=data;
  })
}
ShowCity(idDepartamento: Departamento){
console.log('Boton funciona y el id del departamento es: ', idDepartamento);
this.departamentoService.listarpordepto(idDepartamento).subscribe(data =>{
  data.forEach(element =>{

    console.log(`idCiudad: ${element.idCiudad} - Nombre: ${element.nombre}`);
    
  });
})
}
}