import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRootComponent } from './vet-root.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VetRootComponent', () => {
  let component: VetRootComponent;
  let fixture: ComponentFixture<VetRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetRootComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
