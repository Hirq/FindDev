import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SettingComponent } from './setting/setting.component';


const accountRoutes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "settings", component: SettingComponent},
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent, SettingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,

  ]
})
export class AccountModule { }
