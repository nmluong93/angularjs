import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServcie } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService ]
})
export class NewAccountComponent implements OnInit {


  constructor(private accountService: AccountServcie) {
    this.accountService.statusUpdate.subscribe(
      (status) => alert("New status changed : " + status)
    );
  }

  ngOnInit() {
  }

  onAccountCreated(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logChangeStatus(accountStatus);
  }
}
