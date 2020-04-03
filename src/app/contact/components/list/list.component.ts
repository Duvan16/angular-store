import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeData } from '@core/models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() data: EmployeeData[] = [];

  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.add.emit(this.label);
    this.label = '';
  }

}
