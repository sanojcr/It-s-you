import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassionComponent } from './passion.component';

const routes: Routes = [
  {
    path: '',
    component: PassionComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassionModule { }
