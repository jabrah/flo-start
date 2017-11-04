import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableComponent } from './pages/data-table.component';
import { PersonDetailComponent } from './pages/person-details.component';
import { AboutComponent } from './pages/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'all', component: DataTableComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: 'person/new', component: PersonDetailComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
