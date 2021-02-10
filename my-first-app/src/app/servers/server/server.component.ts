import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    //properties and getter for demo of string interpolation
    serverId: number = 10;
    serverStatus: string = 'offline';
    username = "";
    inputEmpty = true;

    getServerStatus(){
        return this.serverStatus;
    }

    onInputEnableButton(){
        if (this.username === ""){
            this.inputEmpty = true;
        }
        else{
            this.inputEmpty = false;
        }
    }

    onClickResetUsername(){
        this.username = "";
        this.inputEmpty = true;
    }
}