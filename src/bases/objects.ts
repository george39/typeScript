export const pokemon = [1,2,3,4,5,6];

pokemon.push('esto si se puede')
pokemon.push(+'1') // Esto convierte un string en un numero


interface Pokemon {
    id: number;
    name: string;
    age?: number // De esta forma este campo puede ir o no 
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander',
    age: 1
}

export const pokemons: Pokemon[] = [];

pokemons.push( charmander, bulbasaur)

console.log(pokemons)

