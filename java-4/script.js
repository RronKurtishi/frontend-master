// ##### Objektet dhe Arrayt - Përsëritje (#1) #####
// let produkti = {
//  emri: "iPhone 13",
//   pershkrimi: "iPhone 13 Pro",
//   cmimi: 50,
//   tags: ['telefon', 'iphone', 'apple']
// };
// produkti.tags = ['telefon', 'iphone', 'apple'];
// console.log(produkti.tags[0]);
// console.log(produkti.tags[1]);
// console.log(produkti.tags[2]);


// ##### For loops - Praktikë (#2) #####
// let teNgjashme = ["rezultante", "rezulton", "rezolutë", "rezil", "rezmishta", "rezervuar", "reze"];
// for (let i = 0; i < teNgjashme.length; i++) {
//     console.log(teNgjashme[i])
// }

// ##### For loops - Praktikë (#3) #####
// for (let i = 1; i < 100; i++) {
//     console.log(i);
// }

// ##### Array Iteration: Praktike (#4) #####
// const studentet = ['Aldin', 'Ali', 'Almir', 'Arlind', 'Artan', 'Elvedin', 'Gafar', 'Jon'];
// for (let i = 0; i < studentet.length; i++) {
//     // opcioni 1
//     console.log(`Studenti ${studentet[i]}`);
//     // opcioni 2
//     console.log("Studenti " + studentet[i]);
// }

// ##### While Loop - Praktike (#5) #####
// // te gjithe numrat
// let count = 0;
// while (count < 100) {
//     console.log(count);
//     count++;
// }
// // vetem numrat tek
// let countTek = 1
// while (countTek < 100) {
//     console.log(countTek);
//     countTek += 2;
// }

// ##### While Loop - Praktike (#6) #####
// const randomFloat = Math.random() * 10;
// const numriRendomte = Math.ceil(randomFloat);
// let numriPerdoruesit;
// let perpjekjet = 1;
// while (numriPerdoruesit !== numriRendomte) {
//     numriPerdoruesit = prompt("Cilin numer e ka menduar JavaScripti? Shkruaj -1 per te ndaluar lojen!");
//     if (numriPerdoruesit && (numriPerdoruesit > 10 || numriPerdoruesit < 1)) {
//         console.log("Numri nuk eshte ndermjet 1 dhe 10");
//         break;
//     }
//     else {
//         if (+numriPerdoruesit === numriRendomte) {
//             console.log(`E GJETE! Numri qe ka menduar JS eshte numri ${numriRendomte}.`);
//             console.log(`E gjete me ${perpjekjet} perpjekje.`);
//             break;
//         }
//         else {
//             console.log(`Nuk e gjete! JS nuk e ka menduar numrin ${numriPerdoruesit}.`);
//             perpjekjet++;
//         }
//     }
// }

// #### For...of loops: Praktikë (#7)
// const studentet = ['Aldin', 'Ali', 'Almir', 'Arlind', 'Artan', 'Elvedin', 'Gafar', 'Jon'];
// for (const s of studentet) {
//     console.log(s);
// }