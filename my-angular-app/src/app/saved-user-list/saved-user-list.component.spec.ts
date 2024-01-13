import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedUserListComponent } from './saved-user-list.component';

describe('SavedUserListComponent', () => {
  let component: SavedUserListComponent;
  let fixture: ComponentFixture<SavedUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
