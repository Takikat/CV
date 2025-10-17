import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ThemeService, ThemeType } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzSwitchModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  themeService = inject(ThemeService);
  darkTheme = signal<boolean>(false);

  onSwitch() {
    this.darkTheme.update(theme => !theme);
    this.themeService.setTheme(this.darkTheme().valueOf() ? ThemeType.dark : ThemeType.default ).then();
  }
}