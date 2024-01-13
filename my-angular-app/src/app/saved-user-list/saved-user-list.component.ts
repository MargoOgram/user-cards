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
  templateUrl: './saved-user-list.component.html',
  styleUrls: ['./saved-user-list.component.scss']
})
export class SavedUserListComponent implements OnInit {
  savedUsers: User[] = [];

  ngOnInit(): void {
    const savedUsersString: string | null = localStorage.getItem('savedUsers');
    if (savedUsersString) {
      this.savedUsers = JSON.parse(savedUsersString);
    }
  }
}