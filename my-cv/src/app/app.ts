import { Component, inject, OnInit, signal } from '@angular/core';

import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ThemeService } from '../services/theme.service';
import { AboutComponent } from './pages/about/about.component';
import { DividerAnimateDirective } from "../directives/divider-animate.directive";
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutComponent, WorkExperienceComponent, DividerAnimateDirective ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App implements OnInit {
  themeService = inject(ThemeService)

  ngOnInit() {
    this.themeService.loadTheme();
  }
}
