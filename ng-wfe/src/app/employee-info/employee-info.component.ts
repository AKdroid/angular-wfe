import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'employee',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employee = null;
  location = null;
  position = null;

  employeeSubscription : Subscription;
  locationSubscription : Subscription;
  positionSubscription : Subscription; 

  name = "";
  wfe: any;

  constructor(wfService: WorkflowService) {

    this.wfe = wfService;
    
    this.employeeSubscription = wfService.employee$.subscribe(
      resp => {
        this.employee = resp;
      }
    );

    this.locationSubscription = wfService.location$.subscribe(
      resp => {
        this.location = resp;
      }
    );

    this.positionSubscription = wfService.position$.subscribe(
      resp => {
        this.position = resp;
      }      
    );

  }

  ngOnInit() {
  }

  spawnWorkflow(){
    console.log("Triggering Workflow");
    this.wfe.triggerWorkflow(this.name);
  }

}
