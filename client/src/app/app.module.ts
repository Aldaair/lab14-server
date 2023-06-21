import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VerProductoComponent } from './pages/productos/ver-producto/ver-producto.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { CinesComponent } from './pages/cines/cines.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculaFormularioComponent } from './pages/pelicula-formulario/pelicula-formulario.component';
import { EditarPeliculaComponent } from './pages/editar-pelicula/editar-pelicula.component';
import { PasaComponent } from './pages/pasa/pasa.component';
import { CinesconpeliculaComponent } from './pages/cinesconpelicula/cinesconpelicula.component';
import { EditarTarifaComponent } from './pages/editar-tarifa/editar-tarifa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    VerProductoComponent,
    EditarProductosComponent,
    CinesComponent,
    TarifaComponent,
    PeliculasComponent,
    PeliculaFormularioComponent,
    EditarPeliculaComponent,
    PasaComponent,
    CinesconpeliculaComponent,
    EditarTarifaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
