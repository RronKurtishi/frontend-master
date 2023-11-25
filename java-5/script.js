// ##### Loops - Përsëritje (#1) #####
let arr1 = [3, 4, 9, 25, 7, 42, 13, 5, 8, 85, 55];
let arr2 = [5, 25, 44, 3, 7, 62, 9, 12, 20, 36, 76];
let shumaArray1 = 0;
let shumaArray2 = 0;

for (numri of arr1) {
  shumaArray1 += numri;
}

for (numri of arr2) {
  shumaArray2 += numri;
}

let totali = shumaArray1 + shumaArray2;
console.log(`${shumaArray1} + ${shumaArray2} = ${totali}`);

// ##### Funksionet - Praktikë (#2)) #####
function printoEmrin() {
  console.log("Rron");
}

printoEmrin();
printoEmrin();
printoEmrin();

// #### Funksionet me Parametra - Praktikë (#3) #####
function prodhimiINumrave(num1, num2) {
  const prodhimi = num1 * num2;
  console.log(prodhimi);
}

// ##### Return - Praktikë (#5) #####
function prodhimiINumrave(num1, num2) {
  const prodhimi = num1 * num2;
  return prodhimi;
}
const prodhimiGlobal = prodhimiINumrave(2, 20);
console.log(prodhimiGlobal);

// ##### Funksionet me Parametra - Praktikë (#4) #####

// ##### Funksionet - Praktikë (#6) #####

// ##### Funksionet me Shigjetë - Praktikë (#7) #####

// ##### forEach() - Praktikë (#8) #####
let produktet = [{
  emri: 'Xbox Series S',
  cmimi: 20600
  }, {
  emri: 'Play Station 5',
  cmimi: 28000
  }, {
  emri: 'Play Station 4',
  cmimi: 21000
  }, {
  emri: 'Nintendo Switch',
  cmimi: 25000
  }, {
  emri: 'Quest 2',
  cmimi: 30000
  }]; 
  
// ##### map() - Praktikë (#9) #####

// ##### filter() - Praktikë (#10) #####
