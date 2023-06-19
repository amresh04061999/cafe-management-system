import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isDarkMode: boolean;
   public themeLight:string;
   public themeDark:string;
  constructor() {
    this.isDarkMode = false;
    this.themeDark='Dark';
    this.themeDark='light';
    this.themeLight='light';
  }
  ngOnInit(): void {
    this.isDarkMode = JSON.parse(localStorage.getItem('isDarkMode') || 'false');
    this.updateTheme();
  }
  /**
   * This method  Change them color
  */
 public toggleThemeIcon(): void {
    this.isDarkMode = !this.isDarkMode
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    this.updateTheme();
  }
  /**
   *  This method change them color
  */
 private updateTheme() {
    const rootElement = document.documentElement;
    this.isDarkMode ? rootElement.classList.add('dark-mode') : rootElement.classList.remove('dark-mode');
  }

}
