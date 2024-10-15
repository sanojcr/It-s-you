import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacters'
})
export class ReplaceCharactersPipe implements PipeTransform {

  transform(value: string, charToReplace: string, charToInsert: string): string {
    if (!value || !charToReplace || !charToInsert) {
      return value;
    }
    const regex = new RegExp(charToReplace, 'g');
    return value.replace(regex, charToInsert);
  }

}
