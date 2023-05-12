import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PressComponent } from './pages/press/press.component';
import { VastTokenComponent } from './pages/vast-token/vast-token.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  { path: '', redirectTo: 'about' , pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'press', component: PressComponent },
  { path: 'vast-token', component: VastTokenComponent },
  { path: 'community', component: CommunityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
