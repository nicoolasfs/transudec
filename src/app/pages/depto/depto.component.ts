import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service';
import { Router } from '@angular/router'
import { Departamento } from '../../_model/Departamento'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styleUrls: ['./depto.component.css']
})

export class DeptoComponent implements OnInit {
  displayedColumns: string[] = ['idDepartamento', 'nombre'];
  dataSource = new MatTableDataSource;
  departamentos: Departamento[];
  constructor(private departamentoService: DepartamentoService, private router:Router) { }
  
  ngOnInit(): void {
    console.log("Antes de llamar al servicio");
    this.departamentoService.listar().subscribe(data =>{
      this.dataSource.data=data;
  })
}
}
