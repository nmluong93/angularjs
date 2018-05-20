import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountServcie {

    statusUpdate = new EventEmitter<String>();

    constructor(private loggingService : LoggingService) {}

    accounts = [{
        name: 'Master account',
        status: 'active'
      },
      {
        name: 'Test account',
        status: 'inactive'
      },
      {
        name: 'Hidden account',
        status: 'unknown'
      }
      ]

      addAccount(name : string, status : string) {
          this.accounts.push({name : name, status: status});
          this.loggingService.logChangeStatus(status);
      }

      updateAccount(id : number, status : string) {
          this.accounts[id].status = status;
          this.loggingService.logChangeStatus(status); 
      }
}