import { Injectable, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '@api/api';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable()
export class EmployeePinService implements OnInit, OnDestroy {
  private STORAGE_KEY: string = 'EmployeePinService:pinnedEmployees';
  private pinnedEmployees: Set<Employee> = new Set<Employee>();
  employeePinAddEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  employeePinRemoveEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private storage: StorageMap) {
    this.storage.get(this.STORAGE_KEY).subscribe((storedPinnedEmployees: Set<Employee>) => {
      if (!(storedPinnedEmployees === undefined)) {
        this.pinnedEmployees = storedPinnedEmployees;
      }
    });
  }

  ngOnInit(): void {
  }
  pinEmployee(employee: Employee) {
    if (!this.isPinned(employee)) {
      this.pinnedEmployees.add(employee);
    }
    if (employee) this.employeePinAddEvent.emit(employee);
  }
  unpinEmployee(employee: Employee) {
    for (const pinnedEmployee of this.pinnedEmployees) {
      if (pinnedEmployee.id === employee.id) {
        this.pinnedEmployees.delete(pinnedEmployee);
        break;
      }
    }
    // this.pinnedEmployees.delete(employee);
    if (employee) this.employeePinRemoveEvent.emit(employee);
  }
  getPinnedEmployees() {
    return Array.from(this.pinnedEmployees.keys());
  }
  isPinned(employee: Employee) {
    for (const pinnedEmployee of this.pinnedEmployees) {
      if (pinnedEmployee.id === employee.id) {
        return true;
      }
    }
    return false;
  }
  ngOnDestroy() {
    this.storage.set(this.STORAGE_KEY, this.pinnedEmployees);
  }
}
