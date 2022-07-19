import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextframeComponent } from './textframe.component';

describe('TextframeComponent', () => {
  let component: TextframeComponent;
  let fixture: ComponentFixture<TextframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
