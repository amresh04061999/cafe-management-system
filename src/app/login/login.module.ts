import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginPresentationComponent } from './login-presentation/login-presentation.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    LoginComponent,
    LoginPresentationComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TabsModule.forRoot()
  ]
})
export class LoginModule { }
