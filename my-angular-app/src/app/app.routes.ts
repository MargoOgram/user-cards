import { Routes } from '@angular/router';
import { SavedUserListComponent } from './saved-user-list/saved-user-list.component';
import { UserListComponent } from './user-list/user-list.component'; // Змінено порядок імпортів

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'saved-users', component: SavedUserListComponent },
];