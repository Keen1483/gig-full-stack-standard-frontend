import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleCreateComponent } from './components/role-create/role-create.component';
import { RoleDetailsComponent } from './components/role-details/role-details.component';
import { RoleEditComponent } from './components/role-edit/role-edit.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  {path: 'users/:username', canActivate: [AuthGuard], component: UserDetailsComponent},
  {path: 'users/:username/edit', canActivate: [AuthGuard], component: UserEditComponent},
  {path: 'roles', canActivate: [AuthGuard], component: RoleListComponent},
  {path: 'roles/create', canActivate: [AuthGuard], component: RoleCreateComponent},
  {path: 'roles/:name', canActivate: [AuthGuard], component: RoleDetailsComponent},
  {path: 'roles/:name/edit', canActivate: [AuthGuard], component: RoleEditComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
