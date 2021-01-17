import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount :number = 4;// this is interpolation => which is to bind this value into template file (home.component.html)
  btnText = 'Add an Item.';
  goalText ='My first life goal.';
  goals:string[] =  [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.itemCount = this.goals.length;
  }

}
