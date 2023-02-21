import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

// import { name } from './bases/types';
import { pokemon } from './bases/objects';
// import { charmander } from './bases/injection'
// import { charmander } from './bases/decorators'
import { charmander } from './bases/decorators2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${charmander}</h1>
    <h1>hola ${pokemon.join(',')}</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
