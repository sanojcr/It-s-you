import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private session: SessionService
  ) { }

  get isDarkMode(): boolean {
    return this.session.getItem('theme-is-dark') == "true" ? true : false;
  }

  set isDarkMode(value: boolean){
    this.session.setItem('theme-is-dark', `${value}`)
  }

}
