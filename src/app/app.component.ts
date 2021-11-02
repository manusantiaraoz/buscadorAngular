import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clase1';
   nombre: string = 'ManuSanti';
  edad: number = 26;
  productos: Array<{ id: number; name: string; precio: number}> = [
      {
        id: 1,
        name: "bidon PP",
        precio: 600,
      },
      {
        id: 2,
        name: "bidon PET",
        precio: 700,
      },
      {
        id: 3,
        name: "bidon PC",
        precio: 900,
      },
      {
        id: 4,
        name: "sifon ",
        precio: 300,
      },
  ];
  mostrarProductos: Array<{ id: number; name: string; precio: number }> =
    this.productos;
  buscarProducto: string = '';
  handlerInput(e: any) {
    this.buscarProducto = e.target.value;
  }
  submitButton() {
    console.log('apretaste el boton');
      this.mostrarProductos = this.productos.filter((t) =>
        t.name.includes(this.buscarProducto)
      );
  }
}