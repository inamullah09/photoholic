import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { PhotographerspageComponent } from './photographerspage/photographerspage.component';
import { ViewphotographerpageComponent } from './viewphotographerpage/viewphotographerpage.component';
import { PackagespageComponent } from './packagespage/packagespage.component';
import { HttpClientModule } from '@angular/common/http';
import { PhomepageComponent } from './phomepage/phomepage.component';
import { CreatepackagepageComponent } from './createpackagepage/createpackagepage.component';
import { UploadimagespageComponent } from './uploadimagespage/uploadimagespage.component';
import { VieworderspageComponent } from './vieworderspage/vieworderspage.component';
import { CreatephotographerpageComponent } from './createphotographerpage/createphotographerpage.component';

@NgModule({
  declarations: [
    HomepageComponent,
    PhotographerspageComponent,
    ViewphotographerpageComponent,
    PackagespageComponent,
    PhomepageComponent,
    CreatepackagepageComponent,
    UploadimagespageComponent,
    VieworderspageComponent,
    CreatephotographerpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
