import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }

  contacts: Array<any> | undefined;

  ngOnInit(): void {
    this.list();
  }

  list() : any {
    this.contactsService.list().subscribe((data: any[]) => this.contacts = data);
  }
}
