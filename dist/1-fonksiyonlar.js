// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
/*
"-kardesPayi" isminde bir fonksiyon oluşturalım
. Bu fonksiyon, parametre olarak bir isim alsın.
  Eğer fonksiyona bir isim girilirse, fonksiyon
 "bir tane İSİM_BURAYA_GELECEK için, bir de benim için" şeklinde bir string dönsün.
 Eğer fonksiyona bir isim girilmezse, fonksiyon şu şekilde bir string dönsün:
 "bir tane senin için, bir de benim için."

 Örnekler:
 kardesPayi("Ahmet") --> "Bir tane Ahmet için, bir de benim için"
 kardesPayi() --> "Bir tane senin için, bir de benim için."


 Kodu buraya yazalım...

*/
const kardesPayi = (isim) => {
    return isim ? `Bir tane ${isim} için, bir de benim için` : `Bir tane senin için, bir de benim için`;
};
console.log(kardesPayi("Ali"));
console.log(kardesPayi("devran"));
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "Artık yıl" hesaplayan bir "isLeapYear" fonksiyonu yazalım. Bu fonksiyon, 
// parametre olarak bir yıl alsın ve eğer bu yıl artık yıl ise true, değilse
// false dönsün. Bir yılın artık yıl olması için şu koşulların sağlanması gerekiyor:
// 1 - Yıl 4'e tam bölünmeli
// 2 - Yıl 100'e tam bölünmemeli
// VEYA
// 1 - Yıl 400'e tam bölünmeli
// Artık yıl hakkında daha fazla bilgi için:
// https://tr.wikipedia.org/wiki/Art%C4%B1k_y%C4%B1l
// Örnekler:
// artikYil(2024) --> true
// artikYil(2021) --> false
// artikYil(2020) --> true
// artikYil(2019) --> false
// artikYil(2000) --> true
// artikYil(1900) --> false
// artikYil(1700) --> false
// artikYil(1600) --> true
// İPUCU: mod alma işlemi için % operatörünü kullanabiliriz.
// Kodu buraya yazalım...
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020)); // Çıktı: true
console.log(isLeapYear(2021)); // Çıktı: false
console.log(isLeapYear(1900)); // Çıktı: false
console.log(isLeapYear(2000)); // Çıktı: true
export {};
//# sourceMappingURL=1-fonksiyonlar.js.map