import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  // getPasswordErrorMessage() {
  //   if (this.password.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.password.hasError('required') ? 'Not a valid email' : '';
  // }

  constructor() { }
ngOnInit(){}
  login() {
    swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willDelete) => {

        if(willDelete.value){
             swal.fire("Success");
        }else{
          swal.fire("Fail");
        }

      console.log(willDelete)
    });
  }
  
}
