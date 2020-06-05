import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {}

  getSpecies(): string {
    return this.translate.instant(`species.${this.animal.species}`);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { animal: Animal }) => {
      this.animal = data.animal;
    });
  }
}
