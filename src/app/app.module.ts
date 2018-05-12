import { DashboardModule } from './_components/dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { TelainicialComponent } from './_components/telaInicial/telainicial.component';

import {routing} from './app.route';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_components/security/auth.guard';
import { SharedService } from './_services/shared.service';
import { AuthInterceptor } from './_components/security/auth.interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TelainicialComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    DashboardModule

  ],
  //providers: [AuthService,TokenStorage],
  providers: [
    UserService, 
    AuthGuard, 
    SharedService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
