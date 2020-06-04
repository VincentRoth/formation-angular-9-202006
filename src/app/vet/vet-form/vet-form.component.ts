import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup;
  private vet: Veterinarian;

  constructor(
    private vetService: VeterinarianService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe((vet) => {
        this.vet = vet;
        this.vetForm = new FormGroup({
          firstName: new FormControl(vet.firstName),
          lastName: new FormControl(vet.lastName),
        });
      });
    } else {
      this.vetForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      });
    }
  }

  onSubmit(): void {
    const formModel = this.vetForm.value;
    const vet: Veterinarian = {
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
    };

    const onNext = () => {
      this.router.navigate(['/veterinarians']);
    };

    if (this.vet) {
      vet.id = this.vet.id;
      this.vetService.update(vet).subscribe(onNext);
    } else {
      this.vetService.create(vet).subscribe(onNext);
    }
  }
}
