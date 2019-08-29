import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../components/utils/material.module';
import { MovieflixModule } from './movieflix/movieflix.module';

import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule,
    MovieflixModule
  ],
  exports: [],
  declarations: [
    LoginComponent
  ]
})
export class PagesModule { }
