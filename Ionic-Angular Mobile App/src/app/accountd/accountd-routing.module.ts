import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountdPage } from './accountd.page';

const routes: Routes = [
  {
    path: '',
    component: AccountdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountdPageRoutingModule {}
