import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWantedCategoriesComponent } from './most-wanted-categories.component';

describe('MostWantedCategoriesComponent', () => {
  let component: MostWantedCategoriesComponent;
  let fixture: ComponentFixture<MostWantedCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostWantedCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostWantedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
