import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollydayFormComponent } from './hollyday-form.component';

describe('HollydayFormComponent', () => {
  let component: HollydayFormComponent;
  let fixture: ComponentFixture<HollydayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HollydayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollydayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
