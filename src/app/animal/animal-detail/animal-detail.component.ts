import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { animal: Animal }) => {
      this.animal = data.animal;
    });
  }
}
