import { Component, OnInit } from '@angular/core';
import { ContactService} from '../contact.service';
import { Contact } from '../contact';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts:any = [];
  contact:Contact;
  first_name:string;
  last_name:string;
  phone:string;

  constructor(private contactService : ContactService) { }
  
  ngOnInit() {
    this.loadAllContacts();
  }
  loadAllContacts() {
    this.contactService.getContacts()
        .pipe(first())
        .subscribe(contacts => this.contacts = contacts);
  }

  addDetails(){
    const newContact = {
      first_name : this.first_name,
      last_name : this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
      this.loadAllContacts();
    });
  }

  deleteDetails(_id: number) {
    this.contactService.deleteContact(_id)
        .pipe(first())
        .subscribe(() => this.loadAllContacts());
  }

  // deleteContact(id:any){
  //   var contacts = this.contacts;
  //   this.contactService.deleteContact(id)
  //   .subscribe(data =>{
  //     if(data.n==1){
  //       for(var i=0;i < contacts.length; i++){
  //         if(contacts[i]._id == id){
  //           contacts.splice(i,1);
  //         }
  //       }
  //     }
  //   })
  // }

  
}
