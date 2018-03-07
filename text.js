//require('babel-polyfill');
// import {area, circumference} from './circle.js';

// console.log(area(2));

let a = 123;

for(let i = 1; i < 5; i++){
	console.log(i);
}


for(let i = 0; i < 3; i++){
	let i = 'abc';
	console.log(i);
}

function func() {
	let a = 10;

	a = 5;

	console.log(a);
}

func ();

console.log(a);

{
	let name = 'bob';
	console.log(name);
}

console.log(name);

let [j, p, y]  = ['c', 'o', 'o'];

let [head, ...foot] = [2, 3, 4 ,5];

let [x = () => console.log(a)] = [undefined];

const [a1, a2, a3, a4, a5] = 'hello';
console.log(a1);
console.log(a2);
console.log(a3);

let {length : len} = 'hello,bob';
console.log(len);

console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

function num({x = 0, y = 1} = {}) {
	console.log(x, y);
}

num();

/*----------------------------------------------------*/
const map = new Map();

map.set('first' , 'hello');
map.set('second' , 'world');

for(let [key, value] of map) {
	console.log(key + ' is ' + value);
}

for(let codePoint of 'hello') {
	console.log(codePoint);
}

// let s = 'Hello world!';

// console.log(s.startsWith('Hello'));
// console.log(s.endWith('!'));
// console.log(s.includes('o'));

console.log('x'.repeat(3));
console.log('x'.padEnd(5, 'ab'));
alert`123`;

function fetch(url, {body = '', method = 'GET' , headers = {} }) {
	console.log(method);
}

fetch('http://example.com', {});

function foo(x = 5, y = 6) {
	console.log(x, y);
}

foo(undefined, null);

const arr01 = [1, 2];

const arr02 = [...arr01];

arr02[0] = 'bbb';

console.log(arr01[0]);

console.log([...'hello']);

console.log([1, 2, 3].includes(2));

[, 'a'].forEach((x, i) => console.log(i));

console.log(['a', , 'b'].filter( x => true));

function f(x, y) {
	return {x, y};
}

console.log(f(1, 2));

const o = {
	method() {
		return 'Hello';
	}
}

const cart  = {
	_wheels : 4,

	get wheels () {
		return this._wheels;
	},

	set wheels (value) {
		if(value < this._wheels) {
			throw new Error('数值太小了!');
		}
		this._wheels = value;
	}
}

const target = { a : 1, b : 1};

const source1 = { b : 2, c : 2};
const source2 = { c : 3};

Object.assign(target, source1, source2); //用于将两个不同的对象拼合在第一个参数上

//console.log(target, source1, source2);

const obj = {
	toString() {
		return 'abc';
	}
};

const sym = Symbol(obj);
console.log(sym);

// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');

// console.log(s1 === s2);

let s1 = Symbol.for('foo');
console.log(Symbol.keyFor(s1));

class MyClass {
	[Symbol.hasInstance](foo) {
		return foo instanceof Array;
	}
}

console.log([1,2,3] instanceof new MyClass());

/*--------------------------Set  和 Map 数据结构-----------------------------*/

const _set = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => _set.add(x));

for ( let i of _set) {
	console.log(i);	
}

const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);

console.log(set.size);

//去除数组重复成员的方法
function dedupe(array) {
	return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]);

let set1 = new Set(['bob', 'bill', 'kendy']);

console.log(set1);

for(let item of set1.keys()) {
	console.log(item);
}

for(let item of set1.entries()) {
	console.log(item);
}

for(let item of set1) {
	console.log(item);
}

let set2 = new Set([1, 2, 3]);
set2 = new Set(Array.from(set2, val => val * 2));
console.log(set2);

let map01  = new Map();

map01.set(-0, 123);
map01.set(true, new Map());
console.log(map01);

//Map结构转换为对象
function strMapToObj(strMap) {
	let obj = Object.create(null);
	for(let [k, v] of strMap) {
		obj[k] = v;
	}
	return obj;
}

const myMap = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap).yes);

var proxy = new Proxy({}, {
	get : function(target, property) {
		return 35;
	}
});

console.log(proxy.time);

var it =  makeIterator(['a' , 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
	var nextIndex = 0;
	return {
		next : function () {
			return nextIndex < array.length ?
			{value: array[nextIndex++], done : false} :
			{value : undefined, done: true};
		}
	};
}

class RangeIterator {
	constructor (start, stop) {
		this.value = start;
		this.stop = stop;
	}

	[Symbol.iterator] () {return this;}

	next() {
		var value = this.value;
		if (value < this.stop) {
			this.value++;
			return {done : false, value : value};
		}
		return {done:true, value : undefined};
	}
}

function range(start, stop) {
	return new RangeIterator(start, stop);
}

for(var value of range(0, 3)) {
	console.log(value);
}

const arr = ['red', 'green', 'blue'];

for (let v of arr) {
	console.log(v);
}

const obj03 = {};
obj03[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj03) {
	console.log(v);
}
/*---------------------Generator函数-----------------------*/
// function* helloWorldGenerator() {
// 	yield 'hello';
// 	yield 'world';
// 	return 'ending';
// }

// var hw = helloWorldGenerator();
// console.log(hw);

/*------------------class基本语法--------------------*/
class Point {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}

	isTarget () {
		console.log(new.target === Point);
	}
}

var point = new Point(2, 3);

point.isTarget();
console.log(point.toString());
console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__.hasOwnProperty('toString'));

var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };

p1.printName();
p2.printName();

var p3 = new Point(4,2);
p3.printName();

console.log(Object.getPrototypeOf(p3));

let person = new class {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}('张三');

person.sayName();

function Person(name) {
	if(new.target !== undefined) {
		this.name = name;
	} else {
		throw new Error('必须使用 new 命令生成实例');
	}
}

var person01 = new Person('张三');

class Shape {
	constructor ( ) {
		if(new.target === Shape) {
			throw new Error('本类不能实例化');
		}
	}
}

class Rectangle extends Shape {
	constructor(length, width) {
		super(x, y);
		//...
	}
}

//var x12138 = new Shape(); //无法实例化而报错
var y12138 = new Rectangle(3, 4);

class ColorPoint extends Point {
	constructor (x, y, color) {
		super(x, y); //调用父类的constructor(x, y)
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString();
	}
}

let cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint //true

console.log(Object.getPrototypeOf(ColorPoint) === Point);

console.log(ColorPoint.__proto__ === Point);