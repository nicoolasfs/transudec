import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ConductoresComponent } from './pages/conductores/conductores.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { DeptoComponent } from './pages/depto/depto.component';

const routes: Routes = [
  {path: 'buscar', component: BuscarComponent},
  {path: 'ingresar', component: RegistroComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'conductores', component: ConductoresComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'depto', component: DeptoComponent},
  {path: 'mapa', component: MapaComponent},
  {path: '**', component: DeptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
