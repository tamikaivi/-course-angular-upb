import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {AdminComponent} from './components/admin/admin.component'
import {AboutComponent} from './components/about/about.component'
const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'admin',component: AdminComponent },
  { path: 'about',component: AboutComponent }
];

export const AppRoutingRoutes = RouterModule.forRoot(routes);
