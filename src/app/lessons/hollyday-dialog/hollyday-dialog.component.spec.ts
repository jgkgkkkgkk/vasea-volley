import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollydayDialogComponent } from './hollyday-dialog.component';

describe('HollydayDialogComponent', () => {
  let component: HollydayDialogComponent;
  let fixture: ComponentFixture<HollydayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HollydayDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HollydayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
