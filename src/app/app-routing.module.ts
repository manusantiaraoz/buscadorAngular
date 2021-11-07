import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from './components/characters/characters.component';
import {CharacterComponent} from './components/character/character.component';

const routes: Routes = [
  {path: 'characters', component:CharactersComponent},
  {path: 'characters/:id', component:CharacterComponent},
  {path: '**', redirectTo:'/characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
