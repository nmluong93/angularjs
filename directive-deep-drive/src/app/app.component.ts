import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  oddOnly = false;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [2, 4, 6, 8];
}
