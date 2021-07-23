import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtValidationGuard } from './protected/guards/jwt-validation.guard';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [JwtValidationGuard],
    canLoad: [JwtValidationGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'recipes/pastry'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
