// 함수 선언
function doSomething(){
    console.log('hello');
}

function add(a,d){
    const sum = a+b ;
    return sum;
}

function doSomething(add) {
    console.log(add);
    const result = add(2,3);
    console.log(result);
}

//함수 호출
doSomething();

const result = add(1,2);
console.log(result);

doSomething(add); 

const addFun =add;
console.log(add);
addFun(1,2);

//화살표 함수
const simplePrint = () => console.log('hello');
const add = (a,b) => a+b;

