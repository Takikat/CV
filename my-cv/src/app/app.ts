import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ThemeService } from '../services/theme.service';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, HomeComponent, AboutComponent ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('my-cv');
  
  themeService = inject(ThemeService)

  ngOnInit() {
    this.themeService.loadTheme();
  }
}
