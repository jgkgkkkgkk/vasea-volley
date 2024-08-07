import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeamModalComponent } from './delete-team-modal.component';

describe('DeleteTeamModalComponent', () => {
  let component: DeleteTeamModalComponent;
  let fixture: ComponentFixture<DeleteTeamModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTeamModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTeamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
