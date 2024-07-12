import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CharactersPage } from '../models/characters-page.interface';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private readonly CHARACTERS_API: string = 'https://rickandmortyapi.com/api/character'

  constructor(private httpClient: HttpClient) { }

  public async getCharactersList(page: number = 0): Promise<CharactersPage> {
    return lastValueFrom(this.httpClient.get<CharactersPage>(`${this.CHARACTERS_API}/?page=${page + 1}`));
  }

  public async getCharacter(id: number): Promise<Character> {
    return lastValueFrom(this.httpClient.get<Character>(`${this.CHARACTERS_API}/${id}`));
  }
}
