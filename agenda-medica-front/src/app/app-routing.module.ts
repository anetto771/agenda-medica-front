import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => {
      return import ("./components/home/home.module").then(m => m.HomeModule);
    }
  },

  { 
    path: 'login', 
  loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) 
},

  { 
    path: 
    'medicos', 
    loadChildren: () => import('./components/medicos/medicos.module').then(m => m.MedicosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
