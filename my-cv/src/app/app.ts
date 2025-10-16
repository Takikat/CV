import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('my-cv');
  
  themeService = inject(ThemeService)

  ngOnInit() {
    this.themeService.loadTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme().then();
  }
}
