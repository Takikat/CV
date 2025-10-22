import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../directives/scroll-animate.directive';
import { ImageAnimateDirective } from '../../../directives/image-animate.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ScrollAnimateDirective, ImageAnimateDirective ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

}