import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PipeModule } from '../../pipe/pipe.module';
import { MeComponent } from './me/me.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, MeComponent, AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PipeModule],
  exports: [RouterModule]
})
export class HomeModule { }
