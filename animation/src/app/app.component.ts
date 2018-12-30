import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('divState', [
      state(
        'normal', style({
          'background-color': 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'highlighted', style({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })
      ),

      transition('normal <=> highlighted', animate(300))
      // transition ('highlighted => normal' , animate(800))
    ]
    ),


    trigger('wildState', [
      state(
        'normal', style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)'
        })
      ),
      state(
        'highlighted', style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)'
        })
      ),
      state(
        'shrunken', style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)'
        })
      ),

      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      // transition('shrunken <=> *', animate(500, style({
      //   borderRadius : '50px'
      // })))
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]
    ),
    trigger('list1', [
      state(
        'in', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            backgroundColor: 'red'
          })),
          animate(800,
            style({
              opacity: 0,
              transform: 'translateX(100px)'
            })
          )
        ])
      ])
    ]),

    trigger('list2', [
      state(
        'in', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))

      ]),
    ])
  ]
})
export class AppComponent {

  state = 'normal';
  wildState = 'normal';

  items: string[] = [
    'Milk',
    'Sugar',
    'GR'
  ]


  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState == 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAddItem(item: any) {
    this.items.push(item);
  }

  onDeleteItem(item: any) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }
}
