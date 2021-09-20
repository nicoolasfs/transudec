import { Component, Input, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { ProgressBarService } from 'src/app/_service/progress-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  resultadoHija: number;

  constructor(private progress: NgProgress, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBar.startLoading();
    this.progressBar.completeLoading();
  }

}
