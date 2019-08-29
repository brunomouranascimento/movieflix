import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieflixComponent } from './movieflix.component';
import { OrderModule } from 'ngx-order-pipe';

import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/components/utils/material.module';
import { MovieflixService } from './movieflix.service';


@NgModule({
  declarations: [MovieflixComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    OrderModule
  ],
  exports: [MovieflixComponent],
  providers: [MovieflixService]
})
export class MovieflixModule { }
