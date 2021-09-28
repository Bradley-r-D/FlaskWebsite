import { HomePageComponent } from './components/home-page/home-page.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
