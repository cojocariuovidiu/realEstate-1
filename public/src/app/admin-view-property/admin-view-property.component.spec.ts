import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPropertyComponent } from './admin-view-property.component';

describe('AdminViewPropertyComponent', () => {
  let component: AdminViewPropertyComponent;
  let fixture: ComponentFixture<AdminViewPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
