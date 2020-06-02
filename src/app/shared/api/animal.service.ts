import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      comment: 'Mon commentaire',
      name: 'Mon animal du service',
      species: 'chat',
      veterinarian: 'Mr Dupond',
    };
  }

  getAll(): Animal[] {
    return [
      {
        comment: 'Mon commentaire',
        name: 'Mon animal du service',
        species: 'chat',
        veterinarian: 'Mr Dupond',
      },
      {
        comment: 'Mon commentaire 2',
        name: 'Milou',
        species: 'chien',
        veterinarian: 'Mr Dupont',
      },
      {
        comment: 'Mon commentaire 3',
        name: 'Idéfix',
        species: 'chien',
        veterinarian: 'Panoramix',
      },
    ];
  }
}
