import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { ProgressBarService } from 'src/app/_service/progress-bar.service';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar');
    this.progressBar.startLoading();

    this.progressBar.completeLoading();
  }

}
