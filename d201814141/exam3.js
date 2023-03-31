function types(a) {
    for(i =0; i< a.length; i++){
        a[i] = typeof a[i];
    }
    return a;
}


console.log(types([3, "hello", true])); 
console.log(types(["world", []]));

