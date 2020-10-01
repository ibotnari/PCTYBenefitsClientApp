import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@api/api';

@Component({
  selector: 'ngx-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  @Input()
  employee: Employee = null;
  constructor() { }

  ngOnInit(): void {
  }

}
