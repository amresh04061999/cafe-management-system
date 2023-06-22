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
import { AboutContainerComponent } from './about-container/about-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { AboutPresentationComponent } from './about-container/about-presentation/about-presentation.component';
import { ContactPresentationComponent } from './contact-container/contact-presentation/contact-presentation.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    UserDashboardComponent,
    CarouselContainerComponent,
    CarouselPresentationComponent,
    HomePageContainerComponent,
    HomePagePresentationComponent,
    AboutContainerComponent,
    ContactContainerComponent,
    AboutPresentationComponent,
    ContactPresentationComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    CarouselModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDQvkwwCo9BMry20wyQR8ymCwFWwhqQzuE'
    })
  ]
})
export class UserDashboardModule { }
