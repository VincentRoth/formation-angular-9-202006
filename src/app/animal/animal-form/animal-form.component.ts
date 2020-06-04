import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  model: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { animal: Animal }) => {
      if (data.animal) {
        this.model = data.animal;
      } else {
        this.model = {
          comment: '',
          name: '',
          species: '',
          veterinarian: '',
        };
      }
    });
  }

  onSubmit(): void {
    if (this.model.id) {
      this.animalService.update(this.model).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    } else {
      this.animalService.create(this.model).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    }
  }
}
