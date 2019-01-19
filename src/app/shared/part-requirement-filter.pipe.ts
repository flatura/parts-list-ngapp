import {Pipe, PipeTransform} from '@angular/core';
import {Part} from "../parts/model/part";

@Pipe({
  name: 'partRequirementFilter'
})
export class PartRequirementFilterPipe implements PipeTransform {
  transform(parts: Part[], text: string): Part[] {
    if (text == null || text === "") {
      return parts;
    } else if (text == "required") {
      //alert("Сработало обязательные");
      return parts.filter(n => n.need === true);
    } else if (text == "optional") {
      return parts.filter(n => n.need === false);
    } else return parts;
  }
}
