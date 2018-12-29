import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature ='recipe';

  ngOnInit () {
    firebase.initializeApp({
      // these info is from Firebase of google backend
      apiKey: "AIzaSyDvZNdDVjFt-eMbgUygiirts7lygfXegYc",
      authDomain: "ng-recipe-book-eb401.firebaseapp.com"
    })
  }

  onNavigate(feature : string) {
    this.loadedFeature = feature;
  }
}
