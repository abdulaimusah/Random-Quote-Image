import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicspinnerComponent } from './picspinner.component';

describe('PicspinnerComponent', () => {
  let component: PicspinnerComponent;
  let fixture: ComponentFixture<PicspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicspinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
