import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { AdminGradesComponent } from './admin/admin-grades/admin-grades.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminSubjectsComponent } from './admin/admin-subjects/admin-subjects.component';
import { AuthServiceService } from '../services/auth-service.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { StudentClassComponent } from './student/student-class/student-class.component';
import { StudentGroupsComponent } from './student/student-groups/student-groups.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { TrainerClassComponent } from './trainer/trainer-class/trainer-class.component';
import { TrainerGroupsComponent } from './trainer/trainer-groups/trainer-groups.component';
import { TrainerHomeComponent } from './trainer/trainer-home/trainer-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookTemplateComponent } from './books/book-template/book-template.component';
import { BookSearchComponent } from './books/book-search/book-search.component';
import { BookFavouriteComponent } from './books/book-favourite/book-favourite.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
    },
    {
      path:'login',
      component:LoginRegisterComponent,
      pathMatch:'full'
    },
    

    {
      path:'admin/:userName',
      component:AdminHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'adminGrad/:userName',
      component:AdminGradesComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainer/:userName',
      component:TrainerHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'student/:userName',
      component:StudentHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'reset/:userName',
      component:ChangePasswordComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'adminSub/:userName',
      component:AdminSubjectsComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainerGroup/:userName',
      component:TrainerGroupsComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainerClass/:userName/:groupId',
      component:TrainerClassComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'studClass/:userName/:groupId',
      component:StudentClassComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'studGroups/:userName',
      component:StudentGroupsComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'userProfile/:userName',
      component:UserProfileComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'books',component:BookTemplateComponent
    },
    {
      path:'book-search',component:BookSearchComponent
    },
    {
      path:'book-fav',component:BookFavouriteComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
