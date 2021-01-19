import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [

    trigger('goalAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity : 0, transform: 'translateY(-0.75%)', offset:0}),
            style({opacity : 0.5, transform: 'translateY(35px)', offset: .30}),
            style({opacity : 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional : true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity : 1, transform: 'translateY(0)', offset:0}),
            style({opacity : 0.5, transform: 'translateY(35px)', offset: .30}),
            style({opacity : 0, transform: 'translateY(-0.75%)', offset: 1}),
          ]))
        ]), {optional : true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount :number = 4;// this is interpolation => which is to bind this value into template file (home.component.html)
  btnText = 'Add an Item.';
  goalText ='My first life goal.';
  goals:string[] =  ['My goal is to go to school', 'My second goal is to be rich', 'My third goal is to be happy'];
  
  constructor(private _data : DataService) { }

  ngOnInit() {
    
    this._data.goal.subscribe(res => this.goals = res);
    this.updateItemCount();
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.updateItemCount();
    this._data.changeGoal(this.goals);
  }

  removeItem(index:number) {
    this.goals.splice(index, 1);
    this.updateItemCount();
    this._data.changeGoal(this.goals);
  }


  private updateItemCount() {
    this.itemCount = this.goals.length;
  }
}
