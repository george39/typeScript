
export let name = 'Jorge'
export const age: number = 46;
export const isvalid: boolean = true;

name = 'ivan';

export const templateString = ` Esto es un string 
multilinea
que puede tener 
" dobles"
' simples
inyectar valores ${name}
expresiones ${1+1}
numeros: ${age}
booleanos: ${ isvalid }
`

console.log(templateString)