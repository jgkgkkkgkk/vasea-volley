import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHollydayComponent } from './delete-hollyday.component';

describe('DeleteHollydayComponent', () => {
  let component: DeleteHollydayComponent;
  let fixture: ComponentFixture<DeleteHollydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteHollydayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHollydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
