import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from './material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ConductoresComponent } from './pages/conductores/conductores.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';
import { DeptoComponent } from './pages/depto/depto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BuscarComponent,
    EditarComponent,
    PerfilComponent,
    ConductoresComponent,
    PedidosComponent,
    MapaComponent,
    DeptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
