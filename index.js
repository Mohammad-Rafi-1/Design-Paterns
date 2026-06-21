/* 

This code file is to bursh node js basics

*/

//___________________variables ____(let , const)______________________________

// variable can aslo starts with "$"
let $money = 100;
console.log($money)

// declared varibale but not assigned is always "undefined"
let x;
console.log(x)

// const 
const m=100;
//m=100 can not re-decalre or re-assign



// let is block scope, declare before use unlike var, can not be re-declared in the same scope
{
    let y=200;
}
// console.log(y) y not available out of the block
let y  =1
console.log(y)
{
    let y=2000;
}
console.log(y)



/*

const have block scope, must be assigned while declaring, 
can not re-decalred or reassigned ih the same scope, const defines a reference to a value, 
we can elements in array/object but not the reference of the array / object

*/

{
    const z=1000
}
const z =20
console.log(z)

//z=1000 raise an error


/* 

data types
1) string ---> "Hello";
2) Nuber ------> 12, 1.2;
3) BigInt --->236578665784658764357887984n;
4) Boolean ---> true, false
5) object --->{key:value}
6) Array Object ---> [v1,v2,v3]
7) Date Object ---> new Date("2026-06-5")
8) Null --> nul
9) symbol ---> symbol()
10) undefined

*/

console.log(typeof 100)
console.log(typeof 10.000)
console.log(typeof "hello")
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {value:100})
console.log(typeof 4782364872368764n)
console.log(typeof new Date("2026-06-05"))



// symbol --> creates unique primitive value

const b =Symbol("id")
console.log(b)


//BigInt

let p = 100000n
console.log(BigInt(10)+p)



/*

operators:

1) Arthimetic
2) Assignment
3) Comparisons
4) Conditional

*/


//increment
let l=10
l++
console.log(l)

//decrement
l--
console.log(l)


// logical && and ||

l &&=10

console.log(l)


l||=10

console.log(l)

//___________________contional statements_____________________

// ternary operator

console.log(5<10?true : false)
l=1;
// switch block
console.log(l)
switch(l){
    case 1:
    case 10:
        console.log("case-10,1")
        break;
    case 20:
        console.log("case-20")
        break;
}


// ___________strings__________________________________

let a="hello world"
console.log(a.length)

a = `hello world ${l}`
console.log(a)

//indexing 

console.log(a.at(-1))
console.log(a.charAt(0))
console.log(a.charCodeAt(0))


/*

Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)

*/

console.log(a[-100])
console.log(a.charAt(-100))


//concat

console.log(a.concat(" ","Rafi","Mohammad"))


//slicing

console.log(a.slice(0,10))
console.log(a.slice(0,-10))

/*

substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

*/

console.log(a.substring(-100,10))
console.log(a.substring(0,-10))


// padding 

console.log(a.padStart(20,"check"))
console.log(a.padEnd(20,"check"))

//repeat

console.log(a.repeat(2))


a= "microsoft, microsoft solution pvt"

console.log(a.replace("microsoft","senosoft"))



//split

console.log(a.split("s"))


a[0]="p"
console.log(a)


/*


String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()


*/



console.log(a)
console.log(a.search("soft"))




/*

Basic methods

toString()
toExponential()
toFixed()
toPrecision()
valueOf() classes and objects


Static Methods
Static methods can only be used on Number:

Number.isFinite()
Number.isInteger()
Number.isNaN()
Number.isSafeInteger()
Number.parseInt()
Number.parseFloat()


*/



a =100.1212313

console.log(a.toString())
console.log(a.toString(16))


console.log(a.toExponential(2))
console.log(a.toFixed(2))
console.log(a.toPrecision())
console.log(a.toPrecision(2))
console.log(a.toPrecision(4))




Number(true);
Number(false);
Number("10");
console.log(Number("  10"));
Number("10  ");
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

console.log(Number(new Date("1970-01-02")))


console.log(parseInt("hello world 100.2354, 200"))
console.log(parseInt("100 200"))
console.log(parseInt("100, 200"))
console.log(parseInt("100.200"))



console.log(Number.isFinite((200)))
console.log(Number.isNaN((null)))
console.log(Number.isFinite((200)))


console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(10/"apple")
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(1/0)
console.log(-1/0)



// functions

function test(){
    console.log("test")
}

a= test
a()


// function rest parameter

function test(...arg){
    console.log(arg)
}

test(1,2,3,4,5)



// function's as expression


a= function(){
    console.log("I am function expression")
};


a()

// arrow functions--- > they look for surrounding lexical scope for "this"


a =()=>{
    console.log("I am arrow function")
}
a()

/*

 ________________objects_______________________________

*/


const person={
    firstname:"Rafi",
    lastname:"Mohammad",
    eat: function(){
        console.log(`${this.firstname} eating...`)
    }
}
person.age=27
console.log(person)
person.eat()
delete person.age;
console.log(person)

for ( i in person){
    console.log(i)
}


const person2={

    firstname:"Asma",
    lastname:"Mohammad",

}

person2.eat=person.eat


person2.eat()


function test() {
  console.log(this.a);
}

test();


console.log(Object.values(person))

console.log(Object.entries(person))

for (let [key, value] of Object.entries(person)){
    console.log(key,value)
}


console.log(JSON.stringify(person))



// object constructor


function entity(firstname,lastname,age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age
}

const person3 =new entity("Riz","Mohammad","27")
console.log(person3)


//date

const d =new Date(2018, 11, 24, 10, 33, 30)

console.log(d)
console.log(d.toString());


// Arrays



a =["Rafi","Nila","Riz","Mohammad"]
a = new Array("Rafi","Nila","Riz","Mohammad")

console.log(a)
console.log(a[0])
console.log(a[-1])

a[0]="Test"
console.log(a)

console.log(typeof a)


console.log(a.sort())
console.log(a.length)


for ( i=0;i<a.length;i++){
    console.log(a[i])
}
a[0]=()=>{
    console.log("hello world")
}
console.log(a)
console.log(a.toString())

a[0]()

a.push("test2")
a[a.length]="test3"
console.log(a)

a[a.length+2]="test4"
console.log(a)


a=new Array(40)
console.log(a)

console.log(Array.isArray(a))

console.log(a instanceof Array)





/*

Array Methods:

Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array isArray()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()


*/

a=["rafi",21,1.2,-1]
console.log(a)
console.log(a.length)
console.log(a.at(0))
console.log(a.at(-1))
console.log(a.join("*"))
let c =a.pop()
console.log(c)
console.log(a)
a.push("Push")
console.log(a)
console.log(Array.isArray(a))
delete a[a.length-1]
console.log(a,a.length)
console.log(a.concat([1,2,3]))
console.log(a)
console.log(a[3])


c = a.shift()
console.log(c)
console.log(a)


a.unshift("shift1","shift2","shift3")
console.log(a)


a.copyWithin(2,3,6)
console.log(a)


a=[[1,2],[3,4],[5,6],[[1,2,]]]
console.log(a.flat(3))


console.log(a)
a.splice(0,3,"splice1","splice2")
console.log(a)



a={firstname:"Rafi",
    eat:function(){
        console.log("hello world")
    }
}


console.log(JSON.stringify(a)) 




/*

Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()

*/


a=["rafi","rafi","mohammad","rafi",11,21,13]
console.log(a.indexOf("rafi"))
console.log(a.lastIndexOf("rafi"))



index=100
const result=a.find((n,index)=>{
    n>10}
)
console.log(result)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)

fruits.sort();
console.log(fruits)
fruits.reverse();
console.log(fruits)



/*


Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)
Array Rest (...)


*/



//____________________classes_______________________


class car{
    constructor(name,year){
        this.name=name;
        this.year=year
    }

    drive(){
        console.log(`${this.name} start driving.......`)
    }

    break(){
        console.log(`${this.name} stop......`)
    }
}



a= new car("Rafi",2026)
a.drive()






// function test(x){
//     console.log(this.name)
// }

// test.call({name:"Rafi"})



class Animal{

    speak(){
        console.log("I am Animal")
    }
}


class Dog extends Animal{
    bark(){
        console.log("I am dog")
    }
}


a= new Dog()

a.bark()
a.speak()



class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

}



class Employee extends Person{
    constructor(name,age,salary){
        super(name,age)
        this.salary=salary
    }
}


a=new Employee("Rafi",27,50000)

console.log(a.name,a.age,a.salary)



//multiple inheritance

const canFly = {
  fly() {
    console.log("Flying");
  }
};

const canSwim = {
  swim() {
    console.log("Swimming");
  }
};



class Duck{}

Object.assign(Duck.prototype,canSwim,canFly)



console.log(Duck.prototype)


