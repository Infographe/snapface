import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {AuthModule} from "./auth/auth.module";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
