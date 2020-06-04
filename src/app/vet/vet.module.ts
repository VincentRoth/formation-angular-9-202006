import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetRootComponent } from './vet-root.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';


@NgModule({
  declarations: [VetRootComponent, VetListComponent, VetDetailComponent],
  imports: [
    CommonModule,
    VetRoutingModule
  ]
})
export class VetModule { }
