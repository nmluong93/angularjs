import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  naviagetToServer(id: number) {
    // do something
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }

  logIn() {
    console.log("log in" );
    this.authService.login();
  }

  logOut() {
    console.log("log out");
    this.authService.logout();
  }
}
