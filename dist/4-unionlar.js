// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.
let stuff = [];
stuff = [1, 2, 3, 4, 5];
console.log(stuff);
stuff = ['a', 'b', 'c', 'd', 'e'];
console.log(stuff);
let skillLevel = 'Beginner';
skillLevel = "Beginner";
console.log(skillLevel);
skillLevel = "Intermediate";
console.log(skillLevel);
skillLevel = "Advanced";
console.log(skillLevel);
skillLevel = "Expert";
console.log(skillLevel);
// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.
// Kodu buraya yazalım...
const colors = [];
// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.
// Kodu buraya yazalım...
const greet = (name) => {
    if (typeof name === 'string') {
        return `Merhaba, ${name}`;
    }
    else {
        return name.map(n => `Merhaba, ${n}`);
    }
};
export {};
//# sourceMappingURL=4-unionlar.js.map