import{Q as o,R as c,g as e,h as n,j as s,m as a}from"./chunk-WUTDT2UU.js";var p=(()=>{class r{constructor(t){this.http=t,this.translations={},this.currentLang="en",this.loadTranslations(this.currentLang)}loadTranslations(t){this.http.get(`assets/i18n/${t}.json`).subscribe(i=>{this.translations=i})}setLanguage(t){this.currentLang=t,this.loadTranslations(t)}translate(t){return this.translations[t]||t}getCurrentLang(){return this.currentLang}static{this.\u0275fac=function(i){return new(i||r)(s(c))}}static{this.\u0275prov=e({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var j=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275mod=a({type:r})}static{this.\u0275inj=n({imports:[o]})}}return r})();export{p as a,j as b};
