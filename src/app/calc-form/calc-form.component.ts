import { Component, OnInit, Injectable } from '@angular/core';

//import { Calc } from '../Calc';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import { InputData } from '../inputdata.model';
import { OutputInfo } from '../outputinfo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

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

  durationYears = [1,2,3,4,5,6,7,8,9,10];
  //model = new Calc(1000, 50, 50, 1, 10, 2);

  submitted = false;

  outputInfos$: OutputInfo[];
  outputInfoz: OutputInfo[];

  //outputData = {};

  // FINAL
  outputData: any;


  inputDatas$: InputData[];

  inputData= new InputData(1000000, 50, 50, 1, 10, 2);
  
  
  // TEST
  public detailId;
  
  public fkeyId;
  
  calPercent(stockRatio) 
  {
    this.inputData.cashRatio = 100 - stockRatio;

    return this.inputData.cashRatio;
  }
  
  onSubmit()
  { 
    this.dataService.postInputData(this.inputData).subscribe(
      data => (this.outputData = data),
      error => console.error('Error!', error)
      //{
        //this.fetchOutput();
        //console.log(this.outputData);
      //},)
    )

    this.submitted = true;
  }

  newCalc() {
    //this.model = new Calc(1000, 50, 50, 1, 10, 2);
    this.inputData = new InputData(1000000, 50, 50, 1, 10, 2);
  }

  ngOnInit()
  {
    // ORIGINAL: this.fetchOutput();
    //this.fetchOutput();
    //this.getOutputInfoId();
  }

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

  // TEST
  fetchOutputId()
  {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.detailId = id;

    return this.dataService.getOutputInfoId(this.fkeyId)
    .subscribe(data => this.outputInfos$ = data);
  }

  // DONE: Input binding validator stockRatio:cashRatio
  changeRatio(stockRatio)
  {
    this.inputData.cashRatio = 100 - this.inputData.stockRatio;
  }

  // getHero(): void {
  //   const fkeyId = +this.route.snapshot.paramMap.get('fkeyId');
  //   this.dataService.getOutputInfoId(fkeyId)
  //     .subscribe(info => this.outputInfos$ = info);
  // }

  // TODO: Remove this. For Json String
  // get diagnostic() { return JSON.stringify(this.inputData);}

}
