import { Component, OnInit } from '@angular/core';
import { InputData } from './inputdata.model'
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{
  title = 'angular-spring-latest';

  // calcs = [];

  // myCalc = this.calcs[0];
  
  inputDatas$: InputData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getInputData()
    .subscribe(data => this.inputDatas$ = data);

    // return this.dataService.getOutputInfo().subscribe(data => this.outputDatas$ = data);
  }

}
