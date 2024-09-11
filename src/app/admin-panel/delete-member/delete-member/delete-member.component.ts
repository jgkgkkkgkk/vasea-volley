import {Component, Inject} from '@angular/core';
import {MainService} from "../../../services/main.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataContainer} from "../../hollyday-form/hollyday-form.component";

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrl: './delete-member.component.scss'
})
export class DeleteMemberComponent {
  constructor(
    private mainService: MainService,
    public dialogRef: MatDialogRef<DeleteMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) {
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

  deleteMember (id: number): void {
    this.mainService.deleteMember(id).subscribe(data => {
      this.data.parent.loadData();
      this.closeWindow();
    });
  }

}
