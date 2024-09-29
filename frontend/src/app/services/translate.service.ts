import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private translations: { [key: string]: string } = {};
  private currentLang = 'en';

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLang);
  }

  private loadTranslations(lang: string): void {
    this.http.get<{ [key: string]: string }>(`assets/i18n/${lang}.json`)
      .subscribe(translations => {
        this.translations = translations;
      });
  }

  public setLanguage(lang: string): void {
    this.currentLang = lang;
    this.loadTranslations(lang);
  }

  public translate(key: string): string {
    return this.translations[key] || key;
  }

  public getCurrentLang(): string {
    return this.currentLang;
  }
}
