import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent {
  product = {
    tipo: '',
    descripcion: '',
    cantidad: 0,
  };

  isEditMode = false;

  constructor(
    private dialogRef: MatDialogRef<AddProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.product) {
      this.product = { ...data.product };
      this.isEditMode = true;
    }
  }

  save(): void {
    this.dialogRef.close(this.product);
  }

  close(): void {
    this.dialogRef.close();
  }
}
