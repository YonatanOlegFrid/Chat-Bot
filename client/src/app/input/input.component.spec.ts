import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionComponent } from './input.component';

describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
