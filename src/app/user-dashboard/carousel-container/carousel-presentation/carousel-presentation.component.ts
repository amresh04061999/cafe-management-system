import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-presentation',
  templateUrl: './carousel-presentation.component.html',
  styleUrls: ['./carousel-presentation.component.scss']
})
export class CarouselPresentationComponent {
  slides = [
    {image: '../../../../assets/images/slide-1.jpg', text: 'First'},
    {image: '../../../../assets/images/slide-2.jpg', text: 'First'},
    {image: '../../../../assets/images/slide-3.jpg', text: 'First'},
 ];
 noWrapSlides = false;
 showIndicator = true;
}
