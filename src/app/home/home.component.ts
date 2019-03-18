import { Component, OnInit } from '@angular/core';

import { InputData } from '../inputdata.model';
import { OutputInfo } from '../outputinfo.model';
import { DataService } from '../data.service';

import { Router } from '@angular/router';
//import { Calc } from '../Calc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  inputDatas$: InputData[];
  outputInfos$: OutputInfo[];

  //models$: Calc[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit()
  {
    return this.dataService.getInputData()
    .subscribe(data => this.inputDatas$ = data);
  }

  onSelect(id){
    this.router.navigate(['/home', id]);
  }

}
