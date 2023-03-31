function insert(n, index, value) {
  n.splice(index, 0, value);
}
let a = [1, 2, 3]; 
insert(a, 1, "a"); 
insert(a, 3, "b"); 
console.log(a);