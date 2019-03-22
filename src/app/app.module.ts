import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { InputdataDetailComponent } from './inputdata-detail/inputdata-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CalcFormComponent,
    HomeComponent,
    InputdataDetailComponent
  ],
  imports: [
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
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