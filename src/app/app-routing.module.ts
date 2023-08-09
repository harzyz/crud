import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { NewRecordComponent } from './new-record/new-record.component';

const routes: Routes = [
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  {
    path: 'records',
    component: RecordsComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: TableComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
  { path: 'new-record', component: NewRecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
