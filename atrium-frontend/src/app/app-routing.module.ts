import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ProceduresComponent} from "./procedures/procedures.component";
import {SessionsComponent} from "./sessions/sessions.component";

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'procedures', component: ProceduresComponent},
  {path: 'sessions', component: SessionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
