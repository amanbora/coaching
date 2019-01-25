import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BossPortComponent } from './pages/boss-port/boss-port.component';
import { TeachPortComponent } from './pages/teach-port/teach-port.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  { path: 'sign-in',component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'boss-port', component: BossPortComponent},
  { path: 'teach-port', component: TeachPortComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'pie', component: PieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
