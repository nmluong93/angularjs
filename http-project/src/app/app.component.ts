import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http-project';

  pipeFromServer = this.serverservice.getPipeString();

  servers = [
    {
      name: 'Test server',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Test server 2',
      capacity: 100,
      id: this.generateId()
    }
  ]
  constructor(private serverservice: ServerService) { }

  onAddServer (name : string) {
    this.servers.push({
      name : name,
      capacity : 10,
      id : this.generateId()
    });
  }

  onSave() {
    this.serverservice.storeService(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serverservice.getServers().subscribe(
      (servers : any[]) => {
        
        console.log(servers);
        this.servers = servers;
      },
      (error) => console.log(error)
    )
  }

  generateId() {
    return Math.round(Math.random() * 1000);
  }

}
