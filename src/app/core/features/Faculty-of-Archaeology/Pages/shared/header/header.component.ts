import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  menuItems = [
    { label: 'Home', link: '/home', active: true },
    {
      label: 'About',
      hasSubmenu: true,
      submenu: [
        { label: "Dean's Word", link: '/about/dean-message' },
        { label: 'Vision & Mission', link: '/about/vision' },
        { label: 'History', link: '/about/history' },
        { label: 'Objectives', link: '/about/objectives' },
        { label: 'Administrative Structure', link: '/about/administrative' },
        { label: 'Strategic Plan', link: '/about/strategic' }
      ]
    },
    {
      label: 'Departments',
      hasSubmenu: true,
      submenu: [
        { label: 'Egyptology', link: '/departments/1' },
        { label: 'Restoration', link: '/departments/2' },
        { label: 'Islamic Archaeology', link: '/departments/3' }
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