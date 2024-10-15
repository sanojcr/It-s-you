import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { ReplaceCharactersPipe } from './replace-characters.pipe';



@NgModule({
  declarations: [TranslatePipe, ReplaceCharactersPipe],
  imports: [
    CommonModule
  ],
  exports: [TranslatePipe, ReplaceCharactersPipe]
})
export class PipeModule { }
