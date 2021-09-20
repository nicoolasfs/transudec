import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { DepartamentoService } from '../../_service/departamento.service';
<<<<<<< HEAD
import { ProgressBarService } from '../../_service/progress-bar.service';
=======
import { Departamento } from 'src/app/_model/Departamento';
>>>>>>> aea4972f932dde4dde17df5ebe5afdc232f3f8fc

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
<<<<<<< HEAD

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
=======
departamentos: Departamento;
  constructor(public departamentoService: DepartamentoService) { }

  ngOnInit(): void {
   /* console.log("Antes de llamar al servicio");
    this.departamentoService.listarpordepto(11).subscribe(data =>{
      console.log(data);
      data.forEach(element =>{

      console.log(`Código: ${element.idCiudad} - Nombre: ${element.nombre}`);
      
>>>>>>> aea4972f932dde4dde17df5ebe5afdc232f3f8fc
    });
  });
}
*/
}
}
