import { Component, OnInit } from '@angular/core';
import { AccountServcie } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountServcie]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  title = 'app';

  accounts : {name: string, status : string} [] = [];

  constructor(private accountService : AccountServcie) {}

  // onAccountAdded(newAccount: { name: string, status: string }) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updatedInfo: { id: string, newStatus: string }) {
  //   this.accounts[updatedInfo.id].status = updatedInfo.newStatus;
  // }
}
