import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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
