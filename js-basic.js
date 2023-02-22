//array[]
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(dayOfWeek[4]);

dayOfWeek.push("sun");

console.log(dayOfWeek);

//Objects
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
player.lastName = "potato";
player.points = 15;
console.log(player);


const user = {
    name: "zico",
    sayHello : function(personName){
        console.log("HELLO"+personName+"nice to meet you");
    }
};

player.sayHello("lynn");
player.sayHello("zico");