import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VetDetailComponent } from './vet-detail.component';
import { VeterinarianService } from '../../shared/api/veterinarian.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('VetDetailComponent', () => {
  let component: VetDetailComponent;
  let fixture: ComponentFixture<VetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetDetailComponent],
      providers: [VeterinarianService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
