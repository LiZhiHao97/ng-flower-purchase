import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCenterMenuComponent } from './person-center-menu.component';

describe('PersonCenterMenuComponent', () => {
  let component: PersonCenterMenuComponent;
  let fixture: ComponentFixture<PersonCenterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCenterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCenterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
