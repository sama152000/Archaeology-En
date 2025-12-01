import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HeaderService } from '../../../Services/header.service';
import { MenuItem } from '../../../model/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  menuItems: MenuItem[] = [];

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.getMenuItems().subscribe(items => {
      this.menuItems = items;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
