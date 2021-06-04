import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './contacts.service';
import { ContactsComponent } from './contacts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ContactsService
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule { }
