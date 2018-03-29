import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WorkflowService {

  employee = new Subject();
  location = new Subject();
  position = new Subject();

  employee$ = this.employee.asObservable();
  location$ = this.location.asObservable();
  position$ = this.position.asObservable();

  currentState = "INIT";
  nextState = ""
  stateMachine = {};
  semaphore = 0;
  CbkInput = {};

  employeeName = "";

  constructor(private http: HttpClient) {
    this.registerStates();
  }

  getEmployee(name: string) {
    var url = "http://localhost:9000/employee/"+name;
    return this.http.get(url,{observe:"response"})
  }

  getLocation(locationId: string) {
    var url = "http://localhost:9000/location/"+locationId;
    return this.http.get(url,{observe:"response"})
  }

  getPosition(positionId: string) {
    var url = "http://localhost:9000/position/"+positionId;
    return this.http.get(url,{observe:"response"})
  }

  reset(){
    this.currentState = "INIT";
    this.nextState = ""
    this.semaphore = 0;
    this.CbkInput = {};
  }

  triggerWorkflow(name: string){
    this.employeeName = name;
    this.reset();
    this.nextState = "FETCH_EMPLOYEE"
    this.CbkInput["employeeName"] = name;
    this.CbkInput["semaphoreCount"] = 1;
    this.semaphore = 1;
    this.advanceState();
  }

  registerState(state, cbk){
    this.stateMachine[state] = cbk;
  }

  advanceState(){
    this.semaphore = this.semaphore - 1;
    console.log("Decremented semaphore: "+this.semaphore)
    if(this.semaphore == 0){
      console.log("Advance the state to "+this.nextState);
      this.currentState = this.nextState
      this.nextState = "";
      this.semaphore = this.CbkInput["semaphoreCount"];
      console.log("New semaphore value:"+this.semaphore)
      var func = this.stateMachine[this.currentState].bind(this);
      func(this.currentState, this.CbkInput);
    }
  }

  defaultCbk(state, inp){
    console.log("in state "+state);
  }

  employeeFetchCbk(state, inp){
    this.getEmployee(inp["employeeName"]).subscribe(
      data =>{
        console.log(this)
        this.employee.next(data.body)
        this.nextState = "FETCH_EXTRA";
        this.CbkInput["semaphoreCount"] = 2;
        this.CbkInput["locationId"] = data.body["LocationID"];
        this.CbkInput["positionId"] = data.body["PositionID"]
        this.advanceState()
      },
      error => {
        console.log("Error while fetching employeeName");
        this.nextState = "END";
        this.CbkInput["semaphoreCount"] = 0;
        this.advanceState() 
      }
    )
  }

  extraFetchCbk(state, inp){
    this.getLocation(inp["locationId"]).subscribe(
      data =>{
        this.location.next(data.body)
        this.nextState = "END";
        this.CbkInput["semaphoreCount"] = 0;
        this.advanceState()
      },
      error => {
        console.log("Error while fetching location");
        this.nextState = "END";
        this.CbkInput["semaphoreCount"] = 0;
        this.advanceState() 
      }
    );
    this.getPosition(inp["positionId"]).subscribe(
      data =>{
        this.position.next(data.body);
        this.CbkInput["semaphoreCount"] = 0;
        this.nextState = "END";
        this.advanceState()
      },
      error => {
        console.log("Error while fetching position");
        this.nextState = "END";
        this.CbkInput["semaphoreCount"] = 0;
        this.advanceState() 
      }
    ) 

  }

  registerStates(){
    this.registerState("INIT", this.defaultCbk);
    this.registerState("FETCH_EMPLOYEE",this.employeeFetchCbk);
    this.registerState("FETCH_EXTRA",this.extraFetchCbk);
    this.registerState("END",this.defaultCbk);
  }

}
