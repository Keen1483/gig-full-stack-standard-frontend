import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent, DeletionConfirmComponent } from './components/user-details/user-details.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { RoleCreateComponent } from './components/role-create/role-create.component';
import { RoleEditComponent } from './components/role-edit/role-edit.component';
import { RoleDetailsComponent } from './components/role-details/role-details.component';
import { RoleListComponent } from './components/role-list/role-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    FourOhFourComponent,
    AdminNavbarComponent,
    SignupComponent,
    SigninComponent,
    UserEditComponent,
    UserListComponent,
    UserDetailsComponent,
    DeletionConfirmComponent,
    RoleCreateComponent,
    RoleEditComponent,
    RoleDetailsComponent,
    RoleListComponent
  ],
  entryComponents: [
    DeletionConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
