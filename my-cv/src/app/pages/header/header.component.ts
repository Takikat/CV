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

  activeAnchor= signal<string>('home');

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeAnchor.set(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-148px 0px -70% 0px`, // top offset = header height
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));
  }

  onSwitch() {
    this.darkTheme.update(theme => !theme);
    this.themeService.setTheme(this.darkTheme().valueOf() ? ThemeType.dark : ThemeType.default ).then();
  }

  onGoTo(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 148;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // smooth scroll
      });
    }
  }
}