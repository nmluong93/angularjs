import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updatedInfo: { id: string, newStatus: string }) {
    this.accounts[updatedInfo.id].status = updatedInfo.newStatus;
  }
}
