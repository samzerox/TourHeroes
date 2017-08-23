import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent,HeroesComponent,HeroeComponent } from './components/index.componentes';


const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
