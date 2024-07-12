import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CardComponent } from "./components/card/card.component";
import { RickAndMortyService } from './services/rick-and-morty.service';
import { CharactersPage } from './models/characters-page.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ToolbarComponent, CardComponent, MatPaginatorModule]
})
export class AppComponent implements OnInit {
  
  public characters: CharactersPage | undefined;
  public paginatorOptions = {

  }

  constructor(private rickAndMortyService: RickAndMortyService) { }
  
  async ngOnInit(): Promise<void> {
    this.characters = await this.rickAndMortyService.getCharactersList();
  }

  public async onPageChange(event: PageEvent): Promise<void> {
    this.characters = await this.rickAndMortyService.getCharactersList(event.pageIndex);
  }
}
