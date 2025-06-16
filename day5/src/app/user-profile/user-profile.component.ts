// user-profile.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="user-profile-card">
      <div class="avatar-section">
        <img
          [src]="user.avatar || 'assets/default-avatar.png'"
          [alt]="user.name + ' avatar'"
          class="avatar"
        />
        <button
          *ngIf="editable"
          class="edit-avatar-btn"
          (click)="onEditAvatar()"
        >
          📷
        </button>
      </div>

      <div class="user-info">
        <h2 *ngIf="!editMode">{{ user.name }}</h2>
        <input
          *ngIf="editMode"
          [(ngModel)]="editedUser.name"
          class="edit-input"
          placeholder="Name"
        />

        <p class="email" *ngIf="!editMode">{{ user.email }}</p>
        <input
          *ngIf="editMode"
          [(ngModel)]="editedUser.email"
          type="email"
          class="edit-input"
          placeholder="Email"
        />

        <span class="role-badge" [class]="'role-' + user.role.toLowerCase()">
          {{ user.role }}
        </span>
      </div>

      <div class="actions" *ngIf="editable">
        <button *ngIf="!editMode" (click)="startEdit()" class="btn btn-primary">
          Edit
        </button>

        <div *ngIf="editMode" class="edit-actions">
          <button (click)="saveChanges()" class="btn btn-success">Save</button>
          <button (click)="cancelEdit()" class="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .user-profile-card {
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        background: white;
      }

      .avatar-section {
        position: relative;
        text-align: center;
        margin-bottom: 16px;
      }

      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #f0f0f0;
      }

      .edit-avatar-btn {
        position: absolute;
        bottom: 0;
        right: calc(50% - 50px);
        background: #007bff;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        color: white;
        cursor: pointer;
      }

      .user-info h2 {
        margin: 0 0 8px 0;
        color: #333;
      }

      .email {
        color: #666;
        margin: 0 0 12px 0;
      }

      .role-badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .role-admin {
        background: #ff6b6b;
        color: white;
      }
      .role-user {
        background: #4ecdc4;
        color: white;
      }
      .role-moderator {
        background: #45b7d1;
        color: white;
      }

      .edit-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 8px;
      }

      .actions {
        margin-top: 16px;
        text-align: center;
      }

      .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 0 4px;
      }

      .btn-primary {
        background: #007bff;
        color: white;
      }
      .btn-success {
        background: #28a745;
        color: white;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
      }
    `,
  ],
})
export class UserProfileComponent {
  @Input() user!: User;
  @Input() editable: boolean = false;
  @Output() userUpdated = new EventEmitter<User>();
  @Output() avatarEdit = new EventEmitter<void>();

  editMode = false;
  editedUser: User = {} as User;

  startEdit() {
    this.editMode = true;
    this.editedUser = { ...this.user };
  }

  cancelEdit() {
    this.editMode = false;
    this.editedUser = {} as User;
  }

  saveChanges() {
    this.userUpdated.emit(this.editedUser);
    this.editMode = false;
  }

  onEditAvatar() {
    this.avatarEdit.emit();
  }
}
