import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

const allMatFeatures = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule
];
@NgModule({
  imports: [allMatFeatures, CommonModule],
  exports: [allMatFeatures]
})
export class MaterialModule {}
