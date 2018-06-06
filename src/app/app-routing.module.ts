import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './landing/sign-in/sign-in.component';
import {SignUpComponent} from './landing/sign-up/sign-up.component';
import {LoggedInComponent} from './logged-in/logged-in.component';
import {LandingComponent} from './landing/landing.component';
import {DeviceAddingComponent} from './logged-in/content/device-adding/device-adding.component';
import {DeviceManagmentComponent} from './logged-in/content/device-managment/device-managment.component';
import {GroupAddingComponent} from './logged-in/content/group-adding/group-adding.component';
import {GroupManagmentComponent} from './logged-in/content/group-managment/group-managment.component';
import {DeviceComponent} from './logged-in/content/device-managment/device/device.component';
import {AuthGuard} from './core/guards/auth/auth.guard';
import {GroupComponent} from './logged-in/content/group-managment/group/group.component';
import {FileAddingComponent} from './logged-in/content/file-adding/file-adding.component';
import {UploadFileToDeviceComponent} from './logged-in/content/upload-file-to-device/upload-file-to-device.component';
import {UploadFileToGroupComponent} from './logged-in/content/upload-file-to-group/upload-file-to-group.component';
import {HistoryListComponent} from './logged-in/content/history-list/history-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '', component: LandingComponent, children: [
      {path: 'home', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]
  },
  {
    path: 'logged', component: LoggedInComponent, canActivate: [AuthGuard], children: [
      {path: 'addDevice', component: DeviceAddingComponent},
      {path: 'devices', component: DeviceManagmentComponent},
      {path: 'addGroup', component: GroupAddingComponent},
      {path: 'groups', component: GroupManagmentComponent},
      {path: 'device/:id', component: DeviceComponent},
      {path: 'group/:id', component: GroupComponent},
      {path: 'add-file', component: FileAddingComponent},
      {path: 'upload-file-to-device', component: UploadFileToDeviceComponent},
      {path: 'upload-file-to-group', component: UploadFileToGroupComponent},
      {path: 'history', component: HistoryListComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
