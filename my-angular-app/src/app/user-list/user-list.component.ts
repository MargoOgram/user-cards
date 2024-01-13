import { Component, OnInit } from '@angular/core';

interface User {
  name: { first: string; last: string };
  gender: string;
  picture: { thumbnail: string };
  location: { city: string; country: string };
  email: string;
}

@Component({
  selector: 'app-saved-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    const savedUsersString: string | null = localStorage.getItem('savedUsers');
    if (savedUsersString) {
      this.users = JSON.parse(savedUsersString);
    }
  }
  saveUserDetails(user: User): void {
    // Це може бути ваша логіка для збереження деталей користувача.
    // Наприклад, додати користувача до списку savedUsers та зберегти його в localStorage.
    this.users.push(user);
    localStorage.setItem('savedUsers', JSON.stringify(this.users));
  }
}
