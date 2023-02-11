import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiResultsComponent } from './ui-results.component';

describe('UiResultsComponent', () => {
  let component: UiResultsComponent;
  let fixture: ComponentFixture<UiResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
