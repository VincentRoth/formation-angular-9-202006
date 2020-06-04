import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalDetailResolverService } from './animal-detail-resolver.service';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalRootComponent,
    children: [
      { path: '', component: AnimalListComponent },
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
