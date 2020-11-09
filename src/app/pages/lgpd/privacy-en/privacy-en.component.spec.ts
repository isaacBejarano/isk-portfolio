import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyEnComponent } from './privacy-en.component';

describe('PrivacyEnComponent', () => {
  let component: PrivacyEnComponent;
  let fixture: ComponentFixture<PrivacyEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
