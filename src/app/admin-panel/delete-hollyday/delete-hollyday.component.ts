import { Component, Inject } from '@angular/core';
import { MainService } from '../../services/main.service';
import { DialogDataContainer } from '../hollyday-form/hollyday-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-hollyday',
  templateUrl: './delete-hollyday.component.html',
  styleUrl: './delete-hollyday.component.scss'
})
export class DeleteHollydayComponent {
  constructor(
    private mainService: MainService,
    public dialogRef: MatDialogRef<DeleteHollydayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) {
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

 deleteHollyday (id: number): void {
    this.mainService.deleteHollyday(id).subscribe(data => {
      this.data.parent.loadData();
      this.closeWindow();
    });
  }

}


