import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl = 'https://inventario-multimedia-backend.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Obtener lista de ítems por categoría
  getItemsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${category}`);
  }

  addItem(category: string, product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${category}`, product, {
      responseType: 'text', // Indicar que la respuesta es texto
    });
  }

  // Editar un ítem
  updateItem(category: string, id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${category}/${id}`, item);
  }

  // Eliminar un ítem
  deleteItem(category: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${category}/${id}`);
  }
}
