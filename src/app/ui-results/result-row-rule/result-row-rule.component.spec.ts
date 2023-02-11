import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRowRuleComponent } from './result-row-rule.component';

describe('ResultRowRuleComponent', () => {
  let component: ResultRowRuleComponent;
  let fixture: ComponentFixture<ResultRowRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRowRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultRowRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
