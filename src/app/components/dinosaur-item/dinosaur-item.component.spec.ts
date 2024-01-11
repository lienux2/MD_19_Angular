import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurItemComponent } from './dinosaur-item.component';

describe('DinosaurItemComponent', () => {
  let component: DinosaurItemComponent;
  let fixture: ComponentFixture<DinosaurItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinosaurItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DinosaurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
