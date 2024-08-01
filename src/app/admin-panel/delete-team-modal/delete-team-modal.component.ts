import { Component, Inject } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataContainer } from '../team-form/team-form.component';

@Component({
  selector: 'app-delete-team-modal',
  templateUrl: './delete-team-modal.component.html',
  styleUrl: './delete-team-modal.component.scss'
})
export class DeleteTeamModalComponent {

  constructor(
    private mainService: MainService,
    public dialogRef: MatDialogRef<DeleteTeamModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) {
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

 deleteTeam (id: number): void {
    this.mainService.deleteTeam(id).subscribe(data => {
      this.data.parent.loadData();
      this.closeWindow();
    });
  }

}
