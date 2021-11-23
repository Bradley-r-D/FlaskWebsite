import {
  HomePageComponent,
  PersonalInfoComponent,
  SkillsComponent,
} from './components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
