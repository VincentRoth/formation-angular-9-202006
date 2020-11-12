import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetFormComponent } from './vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VetFormComponent', () => {
  let component: VetFormComponent;
  let fixture: ComponentFixture<VetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetFormComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid on data creation', () => {
    expect(component.vetForm.valid).toBeFalsy();
    expect(component.vetForm.get('firstName').errors?.required).toBeTruthy();
    expect(component.vetForm.get('lastName').errors?.required).toBeTruthy();
  });

  it('form validity updates on data change', () => {
    expect(component.vetForm.valid).toBeFalsy();

    expect(component.vetForm.get('firstName').errors?.required).toBeTruthy();
    component.vetForm.get('firstName').setValue('firstName-test');
    expect(component.vetForm.get('firstName').errors).toBeFalsy();

    expect(component.vetForm.get('lastName').errors?.required).toBeTruthy();
    component.vetForm.get('lastName').setValue('lastName-test');
    expect(component.vetForm.get('lastName').errors).toBeFalsy();
  });

  it('form DOM elements should updates on data change', () => {
    const compiled = fixture.nativeElement;

    let id = '#firstName';
    expect(compiled.querySelector(id).value).toBeFalsy();
    component.vetForm.get('firstName').setValue('firstName-test');
    // Use fixture.whenStable() for template-driven form
    expect(compiled.querySelector(id).value).toEqual('firstName-test');

    id = '#lastName';
    expect(compiled.querySelector(id).value).toBeFalsy();
    component.vetForm.get('lastName').setValue('lastName-test');
    expect(compiled.querySelector(id).value).toEqual('lastName-test');
  });
});
