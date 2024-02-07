// TASK 1
function shoutOut() {
  return 'Halo Function!;
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console


// TASK 2
function calculateMultiply(num1, num2) {
  return num1 * num2;
}

var num1 = 5;
var num2 = 6;
let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);



// TASK 3
function processSentence(name, age, address, hobby) {
  return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "gaming";
let fullSentence = processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming");
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"








// do not change this code
module.exports =  { shoutOut, calculateMultiply, processSentence }


