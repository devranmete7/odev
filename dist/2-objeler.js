// "Movie" türünü, aşağıdaki iki değişkenin doğru şekilde tür almasını sağlayacak şekilde
// tanımlayalım. "originalTitle" opsiyonel olsun
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
function getProfit(movie) {
    const { budget, grossWorldwide } = movie.boxOffice;
    return grossWorldwide - budget;
}
export {};
//# sourceMappingURL=2-objeler.js.map