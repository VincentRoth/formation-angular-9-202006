import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinarian } from './veterinarian';

@Injectable({
  providedIn: 'root',
})
export class VeterinarianService {
  constructor(private http: HttpClient) {}

  get(id: number): Observable<Veterinarian> {
    return this.http.get<Veterinarian>(`/api/veterinarians/${id}`);
  }

  getAll(): Observable<Veterinarian[]> {
    return this.http.get<Veterinarian[]>('/api/veterinarians');
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/veterinarians/${id}`);
  }

  create(vet: Veterinarian): Observable<Veterinarian> {
    return this.http.post<Veterinarian>('/api/veterinarians', vet);
  }

  update(vet: Veterinarian): Observable<Veterinarian> {
    return this.http.put<Veterinarian>(`/api/veterinarians/${vet.id}`, vet);
  }
}
