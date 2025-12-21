import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from '../../Services/contacts.service';
import { Contact } from '../../model/contact.model';
import { SafeUrlPipe } from '../../../../pipes/safe-url.pipe';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [ContactsService]
})
export class ContactUsComponent implements OnInit {
  contact?: Contact;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getContact().subscribe(contact => {
      this.contact = contact;
    });
  }
}
