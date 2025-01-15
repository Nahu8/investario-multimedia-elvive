import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Módulos de Angular Material
import { MatDialogModule } from '@angular/material/dialog';  // Para el dialog
import { MatSnackBarModule } from '@angular/material/snack-bar';  // Para los mensajes tipo Snackbar
import { MatFormFieldModule } from '@angular/material/form-field';  // Para el formulario
import { MatInputModule } from '@angular/material/input';  // Para el input
import { MatButtonModule } from '@angular/material/button';  // Para los botones
import { MatIconModule } from '@angular/material/icon';  // Para los íconos
import { MatSelectModule } from '@angular/material/select';  // Para el select
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  // Para el spinner


// Otros módulos
import { MatCardModule } from '@angular/material/card';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteConfirmationModalComponent } from './modals/delete-confirmation-modal/delete-confirmation-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    AddProductModalComponent,
    DeleteConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Angular Material modules
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
