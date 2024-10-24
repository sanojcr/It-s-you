import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppConstants } from './app.constants';
import { AppRoutingModule, routes } from './app.routes';
import { PipeModule } from './pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PipeModule 
  ],
  providers: [AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }