import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment2 } from './assessment2';

describe('Assessment2', () => {
  let component: Assessment2;
  let fixture: ComponentFixture<Assessment2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assessment2],
    }).compileComponents();

    fixture = TestBed.createComponent(Assessment2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});