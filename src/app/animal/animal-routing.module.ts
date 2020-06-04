import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalDetailResolverService } from './animal-detail-resolver.service';
import { AnimalFormComponent } from './animal-form/animal-form.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalRootComponent,
    children: [
      { path: '', component: AnimalListComponent },
      { path: 'new', component: AnimalFormComponent },
      {
        path: 'edit/:id',
        component: AnimalFormComponent,
        resolve: {
          animal: AnimalDetailResolverService,
        },
      },
      {
        path: ':id',
        component: AnimalDetailComponent,
        resolve: {
          animal: AnimalDetailResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
