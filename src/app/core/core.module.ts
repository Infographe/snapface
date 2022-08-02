import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import * as fr from '@angular/common/locales/fr';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}