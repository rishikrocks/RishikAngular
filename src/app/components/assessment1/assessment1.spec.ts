import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment1 } from './assessment1';

describe('Assessment1', () => {
  let component: Assessment1;
  let fixture: ComponentFixture<Assessment1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assessment1],
    }).compileComponents();

    fixture = TestBed.createComponent(Assessment1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});