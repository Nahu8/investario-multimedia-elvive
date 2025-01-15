import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss']
})
export class DeleteConfirmationModalComponent {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmationModalComponent>) {}

  closeDialog(confirm: boolean): void {
    this.dialogRef.close(confirm); // Devuelve true si se confirma la eliminación
  }

  confirmDelete(): void {
    this.dialogRef.close(true);
  }
}
