import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})

//custome directive we are creating.
export class InputFormatDirective {

  constructor(private element:ElementRef) { }
  //event listener.here we are accesing the filed.
  @HostListener('click')onclick(){
    let value:string=this.element.nativeElement.value;
    console.log(value);
    this.element.nativeElement.value=value.toUpperCase();
    
  }
  @HostListener('blur')onblur(){
      let value:string=this.element.nativeElement.value;
      this.element.nativeElement.value=value.toLowerCase();
  }

}
