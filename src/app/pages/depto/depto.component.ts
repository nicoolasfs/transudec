import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service';
import { Router } from '@angular/router'
import { Departamento } from '../../_model/Departamento'
import { MatTableDataSource } from '@angular/material/table';
import { Ciudad } from '../../_model/Departamento';
import { NgProgress } from 'ngx-progressbar';
import { ProgressBarService } from 'src/app/_service/progress-bar.service';

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styleUrls: ['./depto.component.css']
})
export class DeptoComponent implements OnInit {
  list:Departamento[]=[];
  list1:Ciudad[]=[];
  displayedColumns: string[] = ['idDepartamento', 'nombre', 'actions'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();
  columnsToDisplay: string[] = ['idCiudad', 'nombre'];
  dataSourse = this.list;
  dataSourze = this.list1;
  departamentos: Departamento[];
  ciudades: Ciudad[];
  constructor(private departamentoService: DepartamentoService, private router:Router, private progress: NgProgress, public progressBar: ProgressBarService) { }
  
  ngOnInit(): void {
    this.list=[];
    this.progressBar.progressRef = this.progress.ref('progressBar');
    this.progressBar.startLoading();
    console.log("Antes de llamar al servicio");
    this.departamentoService.listar().subscribe(data =>{
      data.forEach(element =>{
      this.list.push({idDepartamento: element.idDepartamento, nombre: element.nombre});
      this.progressBar.completeLoading();
  });
  this.dataSourse= this.list;
});
}

ShowCity(idDepartamento: Departamento){
  this.list1=[];

  this.progressBar.startLoading();
console.log('Boton funciona y el id del departamento es: ', idDepartamento);
this.departamentoService.listarpordepto(idDepartamento).subscribe(data =>{
  data.forEach(element =>{
    this.list1.push({idCiudad: element.idCiudad, nombre: element.nombre});
    this.progressBar.completeLoading();
  });
  this.dataSourze= this.list1;
})
}
}

