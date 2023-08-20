import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssessmentCardComponent } from './add-assessment-card.component';

describe('AddAssessmentCardComponent', () => {
  let component: AddAssessmentCardComponent;
  let fixture: ComponentFixture<AddAssessmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssessmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssessmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
