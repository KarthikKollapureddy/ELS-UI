import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, MaxLengthValidator, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { TrainerDashComponent } from './trainer/trainer-dash/trainer-dash.component';
import { TrainerHomeComponent } from './trainer/trainer-home/trainer-home.component';
import { StudentDashComponent } from './student/student-dash/student-dash.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
// import { MatListOptionModule, MatSelectionListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { AdminGradesComponent } from './admin/admin-grades/admin-grades.component';
import { AdminSubjectsComponent } from './admin/admin-subjects/admin-subjects.component';
import { TrainerGroupsComponent } from './trainer/trainer-groups/trainer-groups.component';
import { TrainerClassComponent } from './trainer/trainer-class/trainer-class.component';
import { StudentClassComponent } from './student/student-class/student-class.component';
import { StudentGroupsComponent } from './student/student-groups/student-groups.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PeopleComponentComponent } from './people-component/people-component.component';
import { BookTemplateComponent } from './books/book-template/book-template.component';
import { BookSearchComponent } from './books/book-search/book-search.component';
import {MatIconModule} from '@angular/material/icon';
import { BookContainerComponent } from './books/book-container/book-container.component';
import { BookFavouriteComponent } from './books/book-favourite/book-favourite.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashComponent,
    AdminHomeComponent,
    TrainerDashComponent,
    TrainerHomeComponent,
    StudentDashComponent,
    StudentHomeComponent,
    ChangePasswordComponent,
    LoginRegisterComponent,
    AdminGradesComponent,
    AdminSubjectsComponent,
    TrainerGroupsComponent,
    TrainerClassComponent,
    StudentClassComponent,
    StudentGroupsComponent,
    UserProfileComponent,
    PeopleComponentComponent,
    BookTemplateComponent,
    BookSearchComponent,
    BookContainerComponent,
    BookFavouriteComponent,
    
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
