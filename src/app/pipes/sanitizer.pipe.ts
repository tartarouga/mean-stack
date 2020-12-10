import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: string, fname: string): any {
    return this.domSanitizer.bypassSecurityTrustHtml('<div style="color:red">' + fname + '</div>'
    );

  }

}
