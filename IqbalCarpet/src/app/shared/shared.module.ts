import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {SharedRoutingModule } from './shared-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'; 
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent,FooterComponent,LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,ReactiveFormsModule,FormsModule,
    MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule
  ]
})
export class SharedModule { }
