import { NgModule } from '@angular/core';
import { NgFilterComponent } from './ng-filter.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [NgFilterComponent]
})
export class NgFilterModule { }
