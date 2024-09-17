const sentence = 'I am a good boy';
// const result = 'yob doog a ma I';


// talukdar
// t
// at
// lat
// ulat
// kulat
// dkulat
// adkulat
// radkulat
// evabei reverse hobe


let reverse = '';
for (const letter of sentence){
    // console.log(letter);
    // reverse = letter + reverse;
}
// console.log(reverse);

let rev = '';
for (i=0; i<sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence [i];
    rev = letter + rev;
}
// console.log(rev);


// Shortcut vabe reverse 
const title = 'MD HABIB ULLAH TALUKDAR'
const reversed = title.split('').reverse().join('');
console.log(reversed);