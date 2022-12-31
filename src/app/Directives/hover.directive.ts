import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color : string = 'red';

  // we can use DOM elelemnts like documnet.getElemntbyID() ..
  constructor(private elemnt : ElementRef, @Inject(DOCUMENT) private document:Document,private renderer : Renderer2) { 
    console.log(elemnt);
  }
  ngOnInit(): void {
    // this.elemnt.nativeElement.style.backgroundColor = this.color
    
  }

}
