import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ImageAnimateDirective } from '../../../directives/image-animate.directive';
import { ScrollAnimateDirective } from '../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NzGridModule,
    NzIconModule,
    ImageAnimateDirective,
    ScrollAnimateDirective
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {

}