import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ProceduresComponent} from "./procedures/procedures.component";
import {SessionsComponent} from "./sessions/sessions.component";
import {RegisterProcedureComponent} from "./procedures/register-procedure/register-procedure.component";
import {RegisterSessionComponent} from "./sessions/register-session/register-session.component";
import {UpdateProcedureComponent} from "./procedures/update-procedure/update-procedure.component";
import {UpdateSessionComponent} from "./sessions/update-session/update-session.component";

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'procedures', component: ProceduresComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'register-procedure', component: RegisterProcedureComponent},
  {path: 'register-session', component: RegisterSessionComponent},
  {path: 'update-procedure/:id', component: UpdateProcedureComponent},
  {path: 'update-session/:id', component: UpdateSessionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
