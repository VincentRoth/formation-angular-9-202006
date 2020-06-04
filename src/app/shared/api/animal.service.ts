import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private http: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.http.get<Animal>(`/api/animals/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>('/api/animals');
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/animals/${id}`);
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>('/api/animals', animal);
  }

  update(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`/api/animals/${animal.id}`, animal);
  }
}
