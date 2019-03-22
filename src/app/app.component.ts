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
  title = 'Angular Rebalance';

  constructor(private dataService: DataService) { }

  ngOnInit() { }
}
