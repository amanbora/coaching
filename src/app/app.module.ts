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
import { SubjectDropdownComponent } from './schedule/subject-dropdown/subject-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TeachPortComponent,
    BossPortComponent,
    SignUpComponent,
    NavbarComponent,
    ScheduleComponent,
    PieComponent,
    SubjectDropdownComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
          apiKey: "AIzaSyDyJxLZ2GdZxveI1yINz9zKPOVy3wt0r0g",
          authDomain: "coaching-f92e7.firebaseapp.com",
          databaseURL: "https://coaching-f92e7.firebaseio.com",
          projectId: "coaching-f92e7",
          storageBucket: "coaching-f92e7.appspot.com",
          messagingSenderId: "566604558923"
        }),
        AngularFireAuthModule,
        AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
