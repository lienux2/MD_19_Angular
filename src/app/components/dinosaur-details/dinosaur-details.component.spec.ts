import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurDetailsComponent } from './dinosaur-details.component';

describe('DinosaurDetailsComponent', () => {
  let component: DinosaurDetailsComponent;
  let fixture: ComponentFixture<DinosaurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinosaurDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DinosaurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
