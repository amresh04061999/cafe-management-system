import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { HomePageContainerComponent } from './home-page-container/home-page-container.component';

const routes: Routes = [ { path: '', component: UserDashboardComponent,
children:[
   {
    path:'',
    pathMatch:'full',
    redirectTo:'home-page'
   },
   {
    path:'home-page',component:HomePageContainerComponent
   }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
