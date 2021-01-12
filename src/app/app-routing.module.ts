import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) 
  },
  {
    path:"page1", component:Page1Component
  },
  {
    path:"page2", component:Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
