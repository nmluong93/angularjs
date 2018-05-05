import { OnInit, ElementRef, Directive } from "@angular/core";

@Directive({
    selector : '[appBasicHighlightDirective]'
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}