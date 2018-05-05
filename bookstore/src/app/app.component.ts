import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    console.log("onServerAdded");
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBluePrintAdded(serverData: { serverName: string, serverContent: string }) {
    console.log("onBluePrintAdded");
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }


}
