import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CardComponent } from "./components/card/card.component";
import { RickAndMortyService } from './services/rick-and-morty.service';
import { CharactersPage } from './models/characters-page.interface';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ToolbarComponent, CardComponent, MatProgressSpinnerModule]
})
export class AppComponent implements OnInit {
  
  public characters: CharactersPage | undefined;
  public isLoading: boolean = false;

  constructor(private rickAndMortyService: RickAndMortyService, private dialog: MatDialog) { }
  
  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.characters = await this.rickAndMortyService.getCharactersList();
    this.isLoading = false;
  }
  
  public async onPageChange(event: PageEvent): Promise<void> {
    this.isLoading = true;
    this.characters = await this.rickAndMortyService.getCharactersList(event.pageIndex);
    this.isLoading = false;
  }
  
  public async onCardClicked(characterId: number): Promise<void> {
    this.isLoading = true;
    const characterData = await this.rickAndMortyService.getCharacter(characterId);
    this.isLoading = false;
    this.dialog.open(CharacterDetailsComponent, {
      data: characterData,
    });
  }
}
