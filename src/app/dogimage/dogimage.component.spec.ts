import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogimageComponent } from './dogimage.component';

describe('DogimageComponent', () => {
  let component: DogimageComponent;
  let fixture: ComponentFixture<DogimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
