import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProceduresComponent } from './procedures/procedures.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SessionsComponent } from './sessions/sessions.component';
import {HttpClientModule} from "@angular/common/http";
import { RegisterProcedureComponent } from './procedures/register-procedure/register-procedure.component';
import { RegisterSessionComponent } from './sessions/register-session/register-session.component';
import { UpdateProcedureComponent } from './procedures/update-procedure/update-procedure.component';
import { UpdateSessionComponent } from './sessions/update-session/update-session.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FooterComponent,
    NavbarComponent,
    ProceduresComponent,
    SessionsComponent,
    RegisterProcedureComponent,
    RegisterSessionComponent,
    UpdateProcedureComponent,
    UpdateSessionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
