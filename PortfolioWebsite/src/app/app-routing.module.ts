import {
  ContactMeComponent,
  HomePageComponent,
  PersonalInfoComponent,
  SkillsComponent,
  TestComponent,
} from './components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: 'projects', component: TestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
