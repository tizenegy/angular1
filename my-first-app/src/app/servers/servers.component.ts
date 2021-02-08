import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //this property is an example of property binding, 
  //as it is bound to the disabled property of the button in the html file.
  allowNewServer: boolean = false;

  constructor() { 
    //this timeout function is used to demonstrate the property binding via allowNewServer
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
