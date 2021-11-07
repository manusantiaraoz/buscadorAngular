import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  //para evitar el error, lo que tengo que hacer es no declararlo tipo array a characters en este caso por mas que resiva un array vacio, mejor es declararlo con un tipo any, asi evito que se me rompa el ngFor 
  characters: any = []

  //el servicio siempre debe ser privado, debido a que debo declarar uno por ruta.
  constructor(private service: CharacterService) { }
//para poder llamar al servicio, tenemos que elimminar el :void y agregar el async antes del ngOnInit
 async ngOnInit() {
    const characters: any  = await this.service.getAll();
    this.characters = characters;
    console.log(this.characters);
    
  }

}
