import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ExitComponent } from './utils/exit/exit.component';

const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  { 
    path: 'login', 
  loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) 
},

  {
    path: "home",
    loadChildren: () => import ("./components/home/home.module").then(m => m.HomeModule),
      canActivate:[AuthGuard]
      
    },

    { path: 'agendamentos',
    loadChildren: () => import('./components/agendamentos/agendamentos.module').then(m => m.AgendamentosModule), 
    canActivate: [AuthGuard] },

  { 
    path: 'medicos', 
    loadChildren: () => import("./components/medicos/medicos.module").then(m => m.MedicosModule),
    canActivate:[AuthGuard]
  },

  { 
    path: 'pacientes', 
    loadChildren: () => import("./components/pacientes/pacientes.module").then(m => m.PacientesModule),
    canActivate:[AuthGuard]
  },
  { 
    path: 'usuarios', 
    loadChildren: () => import("./components/usuarios/usuarios.module").then(m => m.UsuariosModule),
    canActivate:[AuthGuard]
  },
  { 
    path: 'registros', 
    loadChildren: () => import("./components/registros/registros.module").then(m => m.RegistrosModule),
    canActivate:[AuthGuard]
  },
{
  path: "exit",
  component: ExitComponent,
  canActivate: [AuthGuard]
},
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
