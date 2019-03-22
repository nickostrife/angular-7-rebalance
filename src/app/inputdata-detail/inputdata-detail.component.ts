import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  public inputDatas$: InputData;
  outputData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService){ }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.detailId = id;

    this.dataService.getInputDataId(id)
     .subscribe(data => this.inputDatas$ = data);

    // DONE: get Output data based on fkeyId
    this.dataService.getOutputInfoId(id)
    .subscribe(data => this.outputData = data);   
  }

}
