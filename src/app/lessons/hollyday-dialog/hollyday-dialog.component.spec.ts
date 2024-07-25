import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollyDayDialogComponent } from './hollyday-dialog.component';

describe('HollydayDialogComponent', () => {
  let component: HollyDayDialogComponent;
  let fixture: ComponentFixture<HollyDayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HollyDayDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HollyDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

