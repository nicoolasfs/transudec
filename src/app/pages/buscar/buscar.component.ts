import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { DepartamentoService } from '../../_service/departamento.service';
import { ProgressBarService } from '../../_service/progress-bar.service';
import { Departamento } from 'src/app/_model/Departamento';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  departamentos: Departamento;
  constructor(private departamentoService: DepartamentoService,private progress: NgProgress, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
//Añado la progressbar para la vista

    this.progressBar.progressRef = this.progress.ref('progressBar');
    console.log("Antes de llamar al servicio");
    this.progressBar.startLoading();
    this.departamentoService.listar().subscribe(data =>{
      console.log(data);
      data.forEach(element =>{

      console.log(`Código: ${element.idDepartamento} - Nombre: ${element.nombre}`);
      this.progressBar.completeLoading();

    });
  });
}}
