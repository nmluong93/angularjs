import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private router: ActivatedRoute, private route: Router
  ) { }

  ngOnInit() {
    // + => convert String => number
    // const id = +this.router.snapshot.params['id'];
    // this.server = this.serversService.getServer(1);
    // this.router.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.router.data.subscribe(
      (data : Data) =>{
        // server is the same name with the one define in app-module.routing.ts
        this.server = data['server'];
      }
    )
  }

  onEdit() {
    console.log("onedit call");
    this.route.navigate(['edit'], { relativeTo: this.router, queryParamsHandling: 'preserve' });
  }

}
