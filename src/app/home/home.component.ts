import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InputData } from '../inputdata.model';
import { OutputInfo } from '../outputinfo.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit
{
  inputDatas$: InputData[];
  outputInfos$: OutputInfo[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit()
  {
    return this.dataService.getInputData()
    .subscribe(data => this.inputDatas$ = data);
  }

  onSelect(id)
  {
    this.router.navigate(['/home', id]);
  }

}