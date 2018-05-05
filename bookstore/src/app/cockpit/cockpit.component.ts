import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('contentInput') contentInput : ElementRef;
 
  constructor() { }

  ngOnInit() {
  }

  onAddServer(input : HTMLInputElement) {
    console.log(this.contentInput);
    this.serverCreated.emit({
      serverName :input.value,
      serverContent : this.contentInput.nativeElement.value
    })
  }

  onAddBluePrint(input : HTMLInputElement) {
    console.log("onAddBlueprint in cockpit called");
    this.bluePrintCreated.emit({
      serverName : input.value,
      serverContent :  this.contentInput.nativeElement.value
    })
  }
}
