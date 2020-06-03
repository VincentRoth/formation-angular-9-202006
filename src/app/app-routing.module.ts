import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal/animal-detail/animal-detail.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'animals/:id', component: AnimalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
