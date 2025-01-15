import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog'; // Importamos MatDialog
import { AddProductModalComponent } from 'src/app/add-product-modal/add-product-modal.component'; // Importamos el componente del modal
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  categories: string[] = ['accesorios', 'cables', 'cargadores', 'monitores-pantallas', 'pc', 'perifericos'];
  selectedCategory: string = this.categories[0];
  items: any[] = [];
  loading = false;

  constructor(
    private productosService: ProductosService, // Usamos el servicio en lugar de HttpClient directamente
    private snackBar: MatSnackBar,
    private dialog: MatDialog, // Inyectamos MatDialog
  ) {}

  ngOnInit(): void {
    this.getItems(this.selectedCategory);
  }

  // Cambiar categoría
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.getItems(category);
  }

  // Obtener productos
  getItems(category: string): void {
    this.loading = true;
    this.productosService.getItemsByCategory(category).subscribe({
      next: (data) => {
        this.items = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
        this.loading = false;
        this.showMessage('Error al cargar los productos.', 'error');
      }
    });
  }

  openAddOrEditProductModal(product?: any): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      data: { 
        category: this.selectedCategory, // Categoría seleccionada
        product: product || null,        // Producto a editar o null para agregar
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (product) {
          // Editar producto
          this.productosService.updateItem(this.selectedCategory, product.id, result).subscribe({
            next: () => {
              this.getItems(this.selectedCategory); // Recargar la lista
              this.showMessage('Producto actualizado con éxito.', 'success');
            },
            error: () =>{
              this.getItems(this.selectedCategory);
              this.showMessage('Producto actualizado con éxito.', 'success');
            }
            
          });
        } else {
          // Agregar producto
          this.productosService.addItem(this.selectedCategory, result).subscribe({
            next: () => {
              this.getItems(this.selectedCategory); // Recargar la lista
              this.showMessage('Producto agregado con éxito.', 'success');
            },
            error: () =>{
              this.getItems(this.selectedCategory);
              this.showMessage('Producto agregado con éxito.', 'success');
            }
          });
        }
      }
    });
  }
  

  openDeleteConfirmation(product: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent);
  
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.productosService.deleteItem(this.selectedCategory, product.id).subscribe({
          next: () => {
            this.showMessage('Producto eliminado con éxito.', 'success');
            this.getItems(this.selectedCategory); // Actualiza la lista tras eliminar
          },
          error: (err) => {
            this.getItems(this.selectedCategory);
            console.error('Producto eliminado con éxito.', 'success');
            this.showMessage('Producto eliminado con éxito.', 'success');
          }
        });
      }
    });
  }
  
  

  // Mostrar mensajes (snackbar)
  private showMessage(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: type === 'success' ? 'snack-success' : 'snack-error'
    });
  }
}
