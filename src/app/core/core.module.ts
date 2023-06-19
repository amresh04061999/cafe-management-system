import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { AsideComponent } from './component/aside/aside.component';
import { MasterComponent } from './component/master/master.component';
import { LoaderComponent } from './component/loader/loader.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserDashboardRoutingModule } from '../user-dashboard/user-dashboard-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    MasterComponent,
    LoaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[HeaderComponent,AsideComponent,FooterComponent,MasterComponent,LoaderComponent]
})
export class CoreModule { }
