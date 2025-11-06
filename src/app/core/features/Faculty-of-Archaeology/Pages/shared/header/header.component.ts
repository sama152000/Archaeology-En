import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  menuItems = [
    { label: 'Home', link: '/', active: true },
    {
      label: 'About',
      hasSubmenu: true,
      submenu: [
        { label: "Dean's Word", link: '/dean-word' },
        { label: 'Vision & Mission', link: '/mission' },
        { label: 'History', link: '/history' },
        { label: 'Administrative Structure', link: '/admin' },
        { label: 'Strategic Plan', link: '/strategic-plan' }
      ]
    },
    {
      label: 'Departments',
      hasSubmenu: true,
      submenu: [
        { label: 'Egyptology', link: '/departments/egyptology' },
        { label: 'Restoration', link: '/departments/restoration' },
        { label: 'Islamic Archaeology', link: '/departments/islamic' }
      ]
    },
    { label: 'Centers', link: '/centers' },
    { label: 'Services', link: '/services' },
    { label: 'News', link: '/news' }
  ];

  ngOnInit() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}