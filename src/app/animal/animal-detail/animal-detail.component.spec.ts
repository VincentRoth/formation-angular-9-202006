import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailComponent } from './animal-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Animal } from '../../shared/api/animal';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              animal: {
                id: 1,
                name: 'test name',
                comment: 'test comment',
                veterinarian: 'test veterinarian',
                species: 'test species',
              } as Animal,
            }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an animal', () => {
    expect(component.animal.id).toEqual(1);
  });
});
