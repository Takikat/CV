import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSplitterModule } from 'ng-zorro-antd/splitter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzSplitterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  title = 'My App';
}