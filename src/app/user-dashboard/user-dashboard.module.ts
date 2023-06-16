import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { CarouselPresentationComponent } from './carousel-container/carousel-presentation/carousel-presentation.component';
import { HomePageContainerComponent } from './home-page-container/home-page-container.component';
import { HomePagePresentationComponent } from './home-page-container/home-page-presentation/home-page-presentation.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserDashboardComponent,
    CarouselContainerComponent,
    CarouselPresentationComponent,
    HomePageContainerComponent,
    HomePagePresentationComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    CarouselModule,
    FormsModule,

    
  ]
})
export class UserDashboardModule { }
