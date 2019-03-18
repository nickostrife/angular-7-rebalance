import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OutputInfo } from '../outputinfo.model';
import { DataService } from '../data.service';
import { InputData } from '../inputdata.model';


@Component({
  selector: 'app-inputdata-detail',
  templateUrl: './inputdata-detail.component.html',
  styleUrls: ['./inputdata-detail.component.css']
})
export class InputdataDetailComponent implements OnInit {

  // define a local variable id
  public detailId;

  public outputInfos$: OutputInfo[];

  public inputDatas$: InputData;

  // TEST
  outputData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService){}//, private outputInfo: OutputInfo, private dataService: DataService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.detailId = id;

    this.dataService.getInputDataId(id)
    .subscribe(data => this.inputDatas$ = data);

    // DONE: get Output data based on fkeyId
    return this.dataService.getOutputInfoId(id)
    .subscribe(data => this.outputData = data);
 
    // FIX Sementara
    // return this.dataService.getOutputInfoId(1)
    // .subscribe(data => this.outputInfos$ = data);
  }

  // fetchOutput()
  // {
  //   return this.dataService.getOutputInfo().subscribe(data => this.outputInfos$ = data);
  // }

}
