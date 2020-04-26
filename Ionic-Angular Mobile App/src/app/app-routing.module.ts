import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './login/home.module#HomePageModule'},
  {path: 'home', loadChildren: () => import('./login/home.module').then( m => m.HomePageModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)},
  {path: 'account', loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)},
  {path: 'accountd', loadChildren: () => import('./accountd/accountd.module').then( m => m.AccountdPageModule)},
  {path: 'doctors-login', loadChildren: () => import('./doctors-login/doctors-login.module').then( m => m.DoctorsLoginPageModule)},
  {path: 'doctors-signup',loadChildren: () => import('./doctors-signup/doctors-signup.module').then( m => m.DoctorsSignupPageModule)},
  {path: 'doctorstabs', loadChildren: './doctorstabs/doctorstabs.module#DoctorstabsPageModule'},
  {path: 'chat', loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)},
  {path: 'fitness', loadChildren: () => import('./fitness/fitness.module').then( m => m.FitnessPageModule)},
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

