import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PhotographerspageComponent } from './home/photographerspage/photographerspage.component';
import { ViewphotographerpageComponent } from './home/viewphotographerpage/viewphotographerpage.component';
import { PackagespageComponent } from './home/packagespage/packagespage.component';
import { PhomepageComponent } from './home/phomepage/phomepage.component';
import { CreatepackagepageComponent } from './home/createpackagepage/createpackagepage.component';
import { UploadimagespageComponent } from './home/uploadimagespage/uploadimagespage.component';
import { VieworderspageComponent } from './home/vieworderspage/vieworderspage.component';
import { CreatephotographerpageComponent } from './home/createphotographerpage/createphotographerpage.component';
import { UserpaymentspageComponent } from './home/userpaymentspage/userpaymentspage.component';
import { ForgetpageComponent } from './auth/forgetpage/forgetpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent
  },
  {
    path: 'forgot',
    component: ForgetpageComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'photographers',
    pathMatch: 'full',
    component: PhotographerspageComponent
  },
  {
    path: 'viewphotographer/:id',
    component: ViewphotographerpageComponent
  },
  {
    path: 'packages',
    component: PackagespageComponent
  },
  {
    path: 'phome',
    component: PhomepageComponent
  },
  {
    path: 'createpackage',
    component: CreatepackagepageComponent
  },
  {
    path: 'uploadimages',
    component: UploadimagespageComponent
  },
  {
    path: 'vieworders',
    component: VieworderspageComponent
  },
  {
    path: 'createprofile',
    component: CreatephotographerpageComponent
  },
  {
    path: 'userpayments',
    component: UserpaymentspageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
