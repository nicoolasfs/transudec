import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { Departamento } from 'src/app/_model/Departamento';
import { DepartamentoService } from 'src/app/_service/departamento.service';
import { ProgressBarService } from 'src/app/_service/progress-bar.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {
  departamentos: Departamento;
  constructor(private departamentoService: DepartamentoService,private progress: NgProgress, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
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



