import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokerapi.response.interface';

// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }

// }

// FORMA ABREBIADA 
export class Pokemon { 

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number, // de esta manera no se puede cambiar o reasignar el valor de id
        public name: string,
    ) {}

// METODOS
    scream() {
        console.log(`${ this.name.toLocaleLowerCase() }`);
    }

    speak() {
        console.log(`${ this.name}, ${ this.name }`);
    }

    // PROMESAS
    async getMovies(): Promise<Move[]> {
        // return 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );

        return data.moves
    }


}
export const charmander = new Pokemon(4, 'Charmander');
console.log('charmander', charmander.imageUrl)

charmander.scream();
charmander.speak();