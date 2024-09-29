import { Component, importProvidersFrom, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { TranslateService } from './services/translate.service';
import { PipeModule } from './pipe/pipe.module';
import { APP_CONSTANTS, AppConstants } from './app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PipeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'frontend';

  ngOnInit(): void {
    console.log(environment.name);
  }

  constructor(
    private translationService: TranslateService,
    @Inject(APP_CONSTANTS) private constants: AppConstants
  ) { 
    console.log(constants.appName);
  }

  setLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
  }

}
