import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { InputData } from '../inputdata.model';
import { OutputInfo } from '../outputinfo.model';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})

@Injectable()
export class CalcFormComponent implements OnInit
{
  constructor(private dataService: DataService,
    private route: ActivatedRoute, 
    private router: Router,
    private httpClient: HttpClient) { }

  // Duration Years Selection  
  durationYears = [1,2,3,4,5,6,7,8,9,10];
  submitted = false;

  outputInfos$: OutputInfo[];
  outputInfoz: OutputInfo[];

  // FINAL
  outputData: any;
  inputDatas$: InputData[];
  
  // Default Data in calculator form page
  inputData= new InputData(1000000, 50, 50, 1, 10, 2);
    
  // FINAL
  public detailId;
  public fkeyId;
  
  calPercent(stockRatio) 
  {
    this.inputData.cashRatio = 100 - stockRatio;

    return this.inputData.cashRatio;
  }
  
  onSubmit()
  { 
    this.dataService.postInputData(this.inputData)
    .subscribe(data => (this.outputData = data),
      error => console.error('Error!', error),
    )
    console.log(this.outputData);
    this.submitted = true;
  }

  newCalc()
  {
    this.inputData = new InputData(1000000, 50, 50, 1, 10, 2);
  }

  ngOnInit() { }

  getOutputInfoId()
  {
    const fkeyId = +this.route.snapshot.paramMap.get('fkeyId');
    return this.dataService.getOutputInfoId(fkeyId)
      .subscribe(data => this.outputInfoz = data);
  }

  fetchOutput()
  {
    return this.dataService.getOutputInfo().subscribe(data => this.outputInfos$ = data);
  }

  // DONE
  fetchOutputId()
  {
    return this.dataService.getOutputInfoId(this.fkeyId)
     .subscribe(data => this.outputInfos$ = data);
  }

  // DONE: Input binding validator stockRatio:cashRatio
  changeRatio(stockRatio)
  {
    this.inputData.cashRatio = 100 - this.inputData.stockRatio;
  }

}
