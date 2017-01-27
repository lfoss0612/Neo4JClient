import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { SearchComponent } from './search';
import { NavigationComponent } from './navigation';


//TODO: should each component define it's own route?
const appRoutes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [ 
    { path: 'search', component: SearchComponent, pathMatch: 'full'},  
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'home/search',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
