import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account : {name : string, status: string};
  @Input() id : number;

  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>(); 
  constructor() { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // this.account.status = status;
    this.statusChanged.emit({id : this.id, newStatus: status});
  }
}
