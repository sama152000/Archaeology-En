import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HeaderService } from '../../../Services/header.service';
import { LogosService } from '../../../Services/logos.service';
import { ContactsService } from '../../../Services/contacts.service';
import { MenuItem } from '../../../model/header.model';
import { Logo } from '../../../model/logo.model';
import { Contact } from '../../../model/contact.model';

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
  logo?: Logo;
  contact?: Contact;

  constructor(
    private headerService: HeaderService,
    private logosService: LogosService,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.headerService.getMenuItems().subscribe(items => {
      this.menuItems = items;
    });

    this.logosService.getMainLogo().subscribe(logo => {
      this.logo = logo;
    });

    this.contactsService.getMainContact().subscribe(contact => {
      this.contact = contact;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
