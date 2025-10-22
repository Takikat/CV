import { Component } from '@angular/core';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { ImageAnimateDirective } from '../../../directives/image-animate.directive';
import { ScrollAnimateDirective } from '../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [
    NzTimelineModule,
    ScrollAnimateDirective
  ],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.less']
})
export class WorkExperienceComponent {
  
}