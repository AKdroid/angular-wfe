import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { WorkflowService } from './workflow-service.service';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [WorkflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
