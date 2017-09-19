import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanypageComponent } from './companypage.component';

describe('CompanypageComponent', () => {
  let component: CompanypageComponent;
  let fixture: ComponentFixture<CompanypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
