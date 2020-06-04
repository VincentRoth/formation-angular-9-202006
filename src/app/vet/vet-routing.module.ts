import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetRootComponent } from './vet-root.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';

const routes: Routes = [
  {
    path: '',
    component: VetRootComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: ':id', component: VetDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}
