import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { TranslateService } from './services/translate.service';
import { PipeModule } from './pipe/pipe.module';

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

  constructor(private translationService: TranslateService) { }

  setLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
  }

}
