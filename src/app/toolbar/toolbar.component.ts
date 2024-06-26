import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  activateButton: string = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.highlightActivateButton();
      }
    });
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  highlightActivateButton(){
    const currentRoute = this.router.url.split('/')[1];
    switch (currentRoute) {
      case 'index':
        this.activateButton = 'Home';
        break;
      case 'about-us':
        this.activateButton = 'About Us';
        break;
      case 'products':
        this.activateButton = 'Rooms';
        break;
      case 'contact':
        this.activateButton = 'Contact';
        break;
      default:
        this.activateButton = '';
        break;
    }
  }
}
