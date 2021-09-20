import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { ProgressBarService } from 'src/app/_service/progress-bar.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBar.startLoading();
    this.progressBar.completeLoading();
  }

}
