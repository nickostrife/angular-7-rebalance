import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import{ HttpClientModule } from '@angular/common/http'
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { InputdataDetailComponent } from './inputdata-detail/inputdata-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcFormComponent,
    HomeComponent,
    InputdataDetailComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports: [InputdataDetailComponent]
})
export class AppModule { }