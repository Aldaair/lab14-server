import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CinesComponent } from './pages/cines/cines.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculaFormularioComponent } from './pages/pelicula-formulario/pelicula-formulario.component';
import { EditarPeliculaComponent } from './pages/editar-pelicula/editar-pelicula.component';
import { PasaComponent } from './pages/pasa/pasa.component';
import { CinesconpeliculaComponent } from './pages/cinesconpelicula/cinesconpelicula.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'cines', component: CinesComponent },
  { path: 'cinesconpelicula', component: CinesconpeliculaComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'editar-pelicula/:id', component: EditarPeliculaComponent },
  { path: 'crear-pelicula', component: PeliculaFormularioComponent },
  { path: 'pasa', component: PasaComponent },
  { path: 'tarifas', component: TarifaComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
