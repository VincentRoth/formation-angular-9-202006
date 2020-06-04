import { Component, OnInit } from '@angular/core';
import { VeterinarianService } from '../../shared/api/veterinarian.service';
import { Veterinarian } from '../../shared/api/veterinarian';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent implements OnInit {
  vet: Veterinarian;

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.vetService.get(Number(id)).subscribe((vet) => (this.vet = vet));
  }
}
