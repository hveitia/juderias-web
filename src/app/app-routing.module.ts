import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {CentersPageComponent} from "./centers-page/centers-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'centers',
    component: CentersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
