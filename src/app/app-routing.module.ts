import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PhotographerspageComponent } from './home/photographerspage/photographerspage.component';
import { ViewphotographerpageComponent } from './home/viewphotographerpage/viewphotographerpage.component';
import { PackagespageComponent } from './home/packagespage/packagespage.component';

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
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
