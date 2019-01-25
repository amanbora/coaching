import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TeachPortComponent } from './pages/teach-port/teach-port.component';
import { BossPortComponent } from './pages/boss-port/boss-port.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TeachPortComponent,
    BossPortComponent,
    SignUpComponent,
    NavbarComponent,
    ScheduleComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
