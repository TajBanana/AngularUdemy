import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No servers created';
  serverName='tomorrow';
  serverCreated = false;
  servers = ['Test Server', 'Test server 2']

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    },2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
