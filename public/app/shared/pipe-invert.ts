import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invert'
})

export class PipeInvert implements PipeTransform {
  transform(value: string): string {
    return value.split("").reverse().join("");
  }
}
