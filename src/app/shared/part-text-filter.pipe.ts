import {Pipe, PipeTransform} from '@angular/core';
import {Part} from "../parts/model/part";

@Pipe({
  name: 'partTextFilterPipe'
})
export class PartTextFilterPipe implements PipeTransform {
  transform(parts: Part[], text: string): Part[] {
    if (text == null || text === "") {
      return parts;
    }
    return parts.filter(n => n.name.includes(text));
  }
}
