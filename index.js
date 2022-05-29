// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};

firstUser.name = "Monica";
firstUser.gender = "Perempuan";
firstUser.age = "17";
firstUser.email = "monica@dingdong.com";

const favoriteColorFirst = new Set();
favoriteColorFirst.add("Yellow");
favoriteColorFirst.add("Pink");
favoriteColorFirst.add("White");
favoriteColorFirst.add("Purple");

firstUser.favoriteColor = Array.from(favoriteColorFirst);

firstUser.isHavePet = "Yes";

const arrEducationFirst = [];

const elementarySchoolFirst = new Map();
elementarySchoolFirst.set("name", "SD 01");
elementarySchoolFirst.set("city", "Jakarta");
elementarySchoolFirst.set("graduate", 2016);
arrEducationFirst.push(elementarySchoolFirst);

const juniorSchoolFirst = new Map();
juniorSchoolFirst.set("name", "SD 02");
juniorSchoolFirst.set("city", "Jakarta");
juniorSchoolFirst.set("graduate", 2019);
arrEducationFirst.push(juniorSchoolFirst);

const highSchoolFirst = new Map();
highSchoolFirst.set("name", "SMA 03");
highSchoolFirst.set("city", "Tanggerang");
arrEducationFirst.push(highSchoolFirst);

firstUser.education = arrEducationFirst;

const favoriteRestaurantFirst = new Set();
favoriteRestaurantFirst.add("Bento");
favoriteRestaurantFirst.add("Sushi");
favoriteRestaurantFirst.add("Pancake");
favoriteRestaurantFirst.add("Eggy");
favoriteRestaurantFirst.add("Tempura");
favoriteRestaurantFirst.add("Bento");
favoriteRestaurantFirst.add("Eggy");
favoriteRestaurantFirst.add("Padang");
favoriteRestaurantFirst.add("Tteok");
favoriteRestaurantFirst.add("Sushi");
favoriteRestaurantFirst.add("Sushi");

firstUser.favoriteRestaurant = Array.from(favoriteRestaurantFirst);

const secondUser = {};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
