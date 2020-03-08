import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieflixComponent } from './pages/movieflix/movieflix.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: MovieflixComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
