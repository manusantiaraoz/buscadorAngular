import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  //para evitar el error, lo que tengo que hacer es no declararlo tipo array a characters en este caso por mas que resiva un array vacio, mejor es declararlo con un tipo any, asi evito que se me rompa el ngFor 
  //declaro tambien vacio el filterpersonaje para que sea el que me de el resultado de la busqueda, y con el se pueda hacer la card con el nombre que yo necesito
  characters: any = [];
  filterpersonaje: any = [];

  //el servicio siempre debe ser privado, debido a que debo declarar uno por ruta.
  constructor(private service: CharacterService) { }
//para poder llamar al servicio, tenemos que elimminar el :void y agregar el async antes del ngOnInit

 async ngOnInit() {
    const characters: any  = await this.service.getAll();
    //digo que tanto character como filterpersonaje van a devolver el contenido del llamado a la api getAll
    this.characters = characters;
    this.filterpersonaje = characters;  
  }
  //ahora declaro el buscar que uso en mi ngModel, para poder usarlo en mi funcion buscar personaje(en la que voy a ir imprimiento lo que escribo con el ngModelChange) y fijo que filterpersonaje va a ser igual al filtrado de characters que agarra un evento. el toLowerCase me sirvio para que pueda buscar todo con minusculas sin tener que poner las mayusculas
  buscar: string = '';
  mostrarPersonaje(){
    this.filterpersonaje = this.characters.filter((e:any)=>
    e.name.toLowerCase().includes(this.buscar.toLowerCase())
    )
  }

}
