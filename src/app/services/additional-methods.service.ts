import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { DeletionConfirmComponent } from '../components/user-details/user-details.component';
import { ObjectStringType } from '../models/custom-types';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionalMethodsService {

  dialogRef: MatDialogRef<DeletionConfirmComponent>;

  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private userService: UserService,
              private roleService: RoleService,
              private router: Router) { }

  openDeletionConfirm(data: string, className: ObjectStringType) {
    this.dialogRef = this.dialog.open(DeletionConfirmComponent, {
      data: {data: data},
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = `Are you sure you want to delete the ${className}`;

    this.dialogRef.afterClosed().subscribe(response => {
      if (response) {
        if (className === 'User') {
          this.userService.deleteUser(data).subscribe(
            response => {
              this.userService.emitUserSubject();
              this.openSnackBar(`User ${data} was successfully deleted`, 'Close');
              this.router.navigate(['users']);
            }
          );
        } else if (className === 'Role') {
          this.roleService.deleteRole(data).subscribe(
            response => {
              this.roleService.emitRoleSubject();
              this.openSnackBar(`Role ${data} was successfully deleted`, 'Close');
              this.router.navigate(['roles']);
            }
          );
        }
      }
      this.dialogRef = {} as MatDialogRef<DeletionConfirmComponent>;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 5000});
  }

  failedConnection(error: HttpErrorResponse): string {
    if (error.status === 401) {
      return 'User not found, check your username and password';
    } else if (error.status === 0) {
      return 'Check your connection and try again';
    } else {
      return 'Check your username and password or check your connection and try again';
    }
  }
}
