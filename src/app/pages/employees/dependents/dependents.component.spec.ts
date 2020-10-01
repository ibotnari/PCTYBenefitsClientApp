import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsComponent } from './Dependents.component';

describe('DependentsComponent', () => {
  let component: DependentsComponent;
  let fixture: ComponentFixture<DependentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
