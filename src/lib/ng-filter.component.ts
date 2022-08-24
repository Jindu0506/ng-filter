import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Filter } from './filter';

@Component({
  selector: 'ng-filter',
  templateUrl: './ng-filter.component.html',
  styleUrls: ['./ng-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgFilterComponent implements OnInit {

  @Input() fieldsArr: Filter[];

  constructor() { }

  ngOnInit(): void {
    console.log('library :',this.fieldsArr)
  }

  onCheckboxSelected(event, j) {   
    console.log('checkbox selected :',event, j)
  }

  

}
