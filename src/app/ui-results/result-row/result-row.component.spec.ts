import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRowComponent } from './result-row.component';

describe('ResultRowComponent', () => {
  let component: ResultRowComponent;
  let fixture: ComponentFixture<ResultRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
