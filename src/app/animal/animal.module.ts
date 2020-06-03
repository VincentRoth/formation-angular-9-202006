import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { RouterModule } from '@angular/router';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalRootComponent } from './animal-root/animal-root.component';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalItemComponent,
    AnimalRootComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule],
  exports: [],
})
export class AnimalModule {}
