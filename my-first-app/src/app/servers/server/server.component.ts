import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    //properties and getter for demo of string interpolation
    serverId: number = 10;
    serverStatus: string = 'offline';
    getServerStatus(){
        return this.serverStatus;
    }
}


