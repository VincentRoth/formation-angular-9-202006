import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetRootComponent } from './vet-root.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetFormComponent } from './vet-form/vet-form.component';

const routes: Routes = [
  {
    path: '',
    component: VetRootComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: 'new', component: VetFormComponent },
      { path: 'edit/:id', component: VetFormComponent },
      { path: ':id', component: VetDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}
