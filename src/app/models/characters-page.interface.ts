import { Character } from "./character.interface";

export interface CharactersPage {
    info: {
        count: number,
        pages: number
    },
    results: Character[]
}