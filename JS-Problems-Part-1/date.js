const today = new Date(); // ajker ba current date ber korar jonno Date function use korte hoy
console.log(today);

const date = new Date('2024-10-29');
console.log(date.getMonth()); // eta diye mash k bujhay tobe eta index akare output ashbe tahole october hocche normally 10 mash so output ashbe 9
console.log(date.getDay()); // eta diye din k bujhay but din ta sunday monday evabe ashbe...r ekhyane week shuru hoy Sunday(0) theke... so 29 tarikh hobe Tuesday tar mane output ashbe 2...

// 9 r 10 line e ektu prblm ase
const specificDate = new Date(2025, 9, 28);
console.log(specificDate);
specificDate.setMonth(8); // eta te month change kora hoise
console.log(specificDate);
console.log(specificDate.toLocaleString()); //eta te local vabe dekhano hoise 9/28/2025
console.log(specificDate.toLocaleString('en-GB')); // eta te age mash pore date evabe ashche
// const specificDate1 = new Date(2025, 9, 28);
// console.log(specificDate1);


// const date1 = new Date('2026-9-28');
// console.log(date1);