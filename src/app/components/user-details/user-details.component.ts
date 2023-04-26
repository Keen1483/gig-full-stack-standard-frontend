import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AdditionalMethodsService } from '../../services/additional-methods.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(public additionalMethods: AdditionalMethodsService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const username = this.route.snapshot.params['username'];
    this.userService.getUser(username).subscribe(
      (response: User) => {
        this.user = response;
      },
      error => {
        console.log(`Cannot get user ${username}`);
      }
    );
  }

}

@Component({
  selector: 'app-deletion-confirm',
  templateUrl: './deletion-confirm.component.html',
  styleUrls: ['./deletion-confirm.component.scss']
})
export class DeletionConfirmComponent {
  
  constructor(public dialogRef: MatDialogRef<DeletionConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { username: string }) {}

  public confirmMessage: string;
}
