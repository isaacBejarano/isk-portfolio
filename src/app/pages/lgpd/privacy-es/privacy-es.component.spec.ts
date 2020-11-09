import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyEsComponent } from './privacy-es.component';

describe('PrivacyEsComponent', () => {
  let component: PrivacyEsComponent;
  let fixture: ComponentFixture<PrivacyEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
