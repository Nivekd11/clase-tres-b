import { Directive, ElementRef, HostListener, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{

  @Input('dynamicColor') color: string = ''
  colorEnter: string = ''
  @Input('sizeFont') sizeFont: string = ''
  @Input("transition") transition: string = ''

  @HostListener("mouseleave") mouseLeave(){
      //console.log(this)
      this.element.nativeElement.style.color=this.colorEnter;
  }
  @HostListener("mouseenter") mouseEnter(){
    this.element.nativeElement.style.color=this.color;
  }

  @HostListener("click") mouseClick(){
    this.element.nativeElement.style.transition = this.transition
    this.element.nativeElement.style.fontSize=this.sizeFont;
  }

  constructor(private element: ElementRef) { }
  
  ngOnInit(): void {
    //console.log(this.color)
    //console.log(this.element.nativeElement)
    console.log(this.element.nativeElement.style.color)
    this.colorEnter = this.element.nativeElement.style.color
    
  }

}
