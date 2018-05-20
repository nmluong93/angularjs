import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServcie } from '../account.service';
import { stat } from 'fs';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account : {name : string, status: string};
  @Input() id : number;

  constructor(private accountService: AccountServcie) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // this.account.status = status;
    this.accountService.updateAccount(this.id, status);
    this.accountService.statusUpdate.emit(status);
  }
}
