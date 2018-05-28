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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '', component: LandingComponent, children: [
    {path: 'home', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
  ]
  },
  {
    path: 'logged', component: LoggedInComponent, children: [
    {path: 'addDevice', component: DeviceAddingComponent},
    {path: 'devices', component: DeviceManagmentComponent},
    {path: 'addGroup', component: GroupAddingComponent},
    {path: 'groups', component: GroupManagmentComponent},
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
