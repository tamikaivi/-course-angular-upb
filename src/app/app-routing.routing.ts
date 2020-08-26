import { Routes, RouterModule } from '@angular/router';

/*const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home',loadChildren: ()=> import('./pages/home/home.module').then(n => n.HomeModule) },
  { path: 'admin',loadChildren: ()=> import('./pages/admin/admin.module').then(n => n.AdminModule) },
  { path: 'list',loadChildren: ()=> import('./pages/list/list.module').then(n => n.ListModule) }

];*/

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login',loadChildren: ()=> import('./login/login.module').then(n => n.LoginModule) },
  { path: 'page',loadChildren: ()=> import('./pagemodule/pagemodule.module').then(n => n.PagemoduleModule) },
];

export const AppRoutingRoutes = RouterModule.forRoot(routes);
