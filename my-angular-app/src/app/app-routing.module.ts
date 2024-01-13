import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SavedUserListComponent } from './saved-user-list/saved-user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'saved-users', component: SavedUserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }