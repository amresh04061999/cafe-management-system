import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { HomePageContainerComponent } from './home-page-container/home-page-container.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';

const routes: Routes = [ { path: '', component: UserDashboardComponent,
children:[
   {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
   },
    {path:'home',component:HomePageContainerComponent},
   { path:'about',component:AboutContainerComponent},
   { path:'contact',component:ContactContainerComponent}
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
