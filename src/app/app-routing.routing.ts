import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',loadChildren: ()=> import('./pages/home/home.module').then(n => n.HomeModule) },
  { path: 'admin',loadChildren: ()=> import('./pages/admin/admin.module').then(n => n.AdminModule) },
  { path: 'list',loadChildren: ()=> import('./pages/list/list.module').then(n => n.ListModule) }

];

export const AppRoutingRoutes = RouterModule.forRoot(routes);
