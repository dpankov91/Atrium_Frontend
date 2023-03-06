import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ProceduresComponent} from "./procedures/procedures.component";

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'procedures', component: ProceduresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
