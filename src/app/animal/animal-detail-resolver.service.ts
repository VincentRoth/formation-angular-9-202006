import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Animal } from '../shared/api/animal';
import { Observable } from 'rxjs';
import { AnimalService } from '../shared/api/animal.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalDetailResolverService implements Resolve<Animal> {
  constructor(private animalService: AnimalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animal> {
    const id = route.paramMap.get('id');
    return this.animalService.get(Number(id));
  }
}
