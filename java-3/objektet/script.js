let produkti = {
  emri: "Telefon",
  pershkrimi: "iPhone 13 Pro",
  cmimi: 50
};

// Nese cmimi eshte me i madh se 100
if (produkti.cmimi > 100) {
//    krijo nje vlere te re me 10% zbritje && svendosi vleren e re me zbritje produktit
  produkti.cmimi = produkti.cmimi - (produkti.cmimi * 0.1);
}
// Perndryshe 
else {
//    krijo nje vlere te re me 5% zbritje
  let cmimiRi = produkti.cmimi - (produkti.cmimi * 0.05)
//    vendosi vleren e re me zbritje produktit
  produkti.cmimi = cmimiRi;
}
// Nxir ne konsole produktin me cmimin e ri
console.log(produkti);

