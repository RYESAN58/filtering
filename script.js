// Number.prototype.isPrime = function() {
//         for( let i=2; i<this; i++ ) {
//             if( this % i === 0 ) {
//                 return false;
//             }
//         }
//         return true;
//     }

    
//     import { performance } from 'perf_hooks';
//     const start = performance.now();
//     let primeCount = 0;
//     let num = 2;
//     while( primeCount < 1e4 ) {
//         if( num.isPrime() ) {
//             primeCount* primeCount;
//         }
//         num++;
//     }
//     console.log(`The 10,000th prime number is ${num-1}`);
//     console.log(`This took ${performance.now() - start} milliseconds to run`);


// console.log('Hello World')


const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


    //const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    //console.log(bListPkmn

    //evenly divisable by 3
    const laterPkmn = pokémon.filter( p => p['id'] % 3  === 0)
    console.log(laterPkmn)

    //fire type 
    const firePkmnn = pokémon.filter (p => p.types[0] === 'fire')
    console.log(firePkmnn)

    //pokemon with one or more types
    const multypkmn = pokémon.filter (p => p.types.length > 1)
    console.log(multypkmn)

    //names of all Pokemon
    let x = []
    const allNames = pokémon.filter(p=> x.push(p.name))
    console.log(x)

    //99 and up
    const ninePkmn = pokémon.filter( p => p['id'] >= 99)
    console.log(ninePkmn)
    //pokemone names who's type is poison 
    let y = []
    const poison = pokémon.filter( p => p.types == 'poison' && y.push(p.name))
    console.log(y)
    //first type where 2nd type is flying
    let flying = []
    const flyers=pokémon.filter(p => p.types[1] == 'flying'&& flying.push(p.types[0]))
    console.log(flying)
    let count = 0
    const counter = pokémon.filter(p => p.types[0] == 'normal' && count++)
    console.log(counter)
    console.log(count)
