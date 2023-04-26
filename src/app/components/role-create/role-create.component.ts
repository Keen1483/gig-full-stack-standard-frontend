import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { AdditionalMethodsService } from '../../services/additional-methods.service';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {

  roleForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private roleService: RoleService,
              private additionalMethods: AdditionalMethodsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^((?!ROLE)(?!ROLE_)[A-Z0-9_])+$/)]]
    });
  }

  submitForm() {
    const role: Role = {
      name: this.roleForm.value['name']
    };

    this.roleService.createRole(role).subscribe(
      (response: Role) => {
        this.additionalMethods.openSnackBar(`Role ${response.name} saved sucessfully`, 'Close');
      },
      error => {
        console.log('An error occured, cannot create this role: ' + error);
      }
    );
  }

}
