import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultToolbarComponent } from './result-toolbar.component';

describe('ResultToolbarComponent', () => {
  let component: ResultToolbarComponent;
  let fixture: ComponentFixture<ResultToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
