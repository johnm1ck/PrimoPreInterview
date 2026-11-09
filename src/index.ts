import { merge } from "./merge";

const result = merge([0, 3, 7], [1, 4, 8], [9, 6, 2]);
console.log(result); // [0, 1, 2, 3, 4, 6, 7, 8, 9]
