import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRootComponent } from './animal-root.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AnimalRootComponent', () => {
  let component: AnimalRootComponent;
  let fixture: ComponentFixture<AnimalRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalRootComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
