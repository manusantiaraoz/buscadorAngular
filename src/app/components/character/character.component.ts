import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character:any = [];
  constructor(private ActivatedRoute: ActivatedRoute, private service: CharacterService) { }

  async ngOnInit() {
    const params = this.ActivatedRoute.snapshot.params.id;// es lo mismo que poner req.params.id
    this.character = await this.service.getSingle(params);
    console.log(this.character)

  }

}
