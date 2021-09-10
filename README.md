# mudverse.js

## Demo

```js
let mudverse = new Mudverse("http://localhost:8545")
let traits = await mudverse.traitsOf(1)
console.log(traits)

/*
[
  { trait_type: 'Race', value: 'Goblin' },
  { trait_type: 'Gender', value: 'Female' },
  { trait_type: 'CHA', value: '18' },
  { trait_type: 'CON', value: '8' },
  { trait_type: 'DEX', value: '2' },
  { trait_type: 'INT', value: '24' },
  { trait_type: 'STR', value: '26' },
  { trait_type: 'WIS', value: '23' }
]
*/

```
