import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit{

  @Input('color') color: string = ""
  @Input('size') size: string = ""
  @Input('fontStyle') font: string=""
  constructor(public element : ElementRef) { 

    

    //console.log(element.nativeElement.style)
    
  }
  ngOnInit(): void {
    //console.log(this.color)
    this.element.nativeElement.style.color=this.color
    this.element.nativeElement.style.fontSize=this.size
    this.element.nativeElement.style.fontStyle=this.font
    //console.log((this.element.nativeElement as HTMLElement).innerHTML)
  }



  

}
