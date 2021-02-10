import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //this property is an example of property binding, 
  //as it is bound to the disabled property of the button in servers.component.html.
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created.";
  serverName = "";

  constructor() { 
    //this timeout function is used to demonstrate the property binding via allowNewServer
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  //example for event binding: this function is called by the button on servers.component.html.
  onCreateServer(){
    this.serverCreationStatus = "Server was created.";
  }

  //example of event binding: taking the value of an input and displaying it below.
  //passing with $event und explicit casting <>
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
