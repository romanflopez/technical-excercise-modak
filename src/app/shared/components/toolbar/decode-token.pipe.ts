import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeToken'
})
export class DecodeTokenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
