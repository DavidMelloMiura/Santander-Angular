import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorItemComponent } from './colaborador-item.component';

describe('ColaboradorItemComponent', () => {
  let component: ColaboradorItemComponent;
  let fixture: ComponentFixture<ColaboradorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
