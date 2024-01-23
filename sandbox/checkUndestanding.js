//// @ts-check
// W03
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];


let namesB = names.filter((x) => x[0].toLowerCase() === "b")
console.log("names starting with B", namesB);


let namesLength = names.map((x) => x.length)
console.log("names name lengths", namesLength);

console.log("average string lenght", names.reduce((acc, v, i, a) => acc + v.length, 0) / 5);