import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'home-page', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }, { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
