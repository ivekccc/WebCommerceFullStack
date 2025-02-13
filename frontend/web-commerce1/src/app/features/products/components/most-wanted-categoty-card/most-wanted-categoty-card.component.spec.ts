import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWantedCategotyCardComponent } from './most-wanted-categoty-card.component';

describe('MostWantedCategotyCardComponent', () => {
  let component: MostWantedCategotyCardComponent;
  let fixture: ComponentFixture<MostWantedCategotyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostWantedCategotyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostWantedCategotyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
