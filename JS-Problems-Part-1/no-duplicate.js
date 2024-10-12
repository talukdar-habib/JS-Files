/**
 * Array has some duplicates elements ss
 * []
 */

//array te duplicate ba ek ta item koyekbar ase kina seta check kore alada jevabe korte hobe

const biriyaniKhor = ['Habib', 'Labib', 'Habiba', 'Habib','Labiba',]
// const numbers = [10,20,30,20,10,40,60,30];

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);
