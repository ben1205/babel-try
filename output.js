'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['123'], ['123']);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//require('babel-polyfill');
// import {area, circumference} from './circle.js';

// console.log(area(2));

var a = 123;

for (var i = 1; i < 5; i++) {
	console.log(i);
}

for (var _i = 0; _i < 3; _i++) {
	var _i2 = 'abc';
	console.log(_i2);
}

function func() {
	var a = 10;

	a = 5;

	console.log(a);
}

func();

console.log(a);

{
	var _name = 'bob';
	console.log(_name);
}

console.log(name);

var j = 'c',
    p = 'o',
    y = 'o';
var head = 2,
    foot = [3, 4, 5];
var _undefined = undefined,
    x = _undefined === undefined ? function () {
	return console.log(a);
} : _undefined;

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a1 = _hello2[0],
    a2 = _hello2[1],
    a3 = _hello2[2],
    a4 = _hello2[3],
    a5 = _hello2[4];

console.log(a1);
console.log(a2);
console.log(a3);

var _helloBob = 'hello,bob',
    len = _helloBob.length;

console.log(len);

console.log([[1, 2], [3, 4]].map(function (_ref) {
	var _ref2 = _slicedToArray(_ref, 2),
	    a = _ref2[0],
	    b = _ref2[1];

	return a + b;
}));

function num() {
	var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref3$x = _ref3.x,
	    x = _ref3$x === undefined ? 0 : _ref3$x,
	    _ref3$y = _ref3.y,
	    y = _ref3$y === undefined ? 1 : _ref3$y;

	console.log(x, y);
}

num();

/*----------------------------------------------------*/
var map = new Map();

map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 2),
		    key = _step$value[0],
		    _value = _step$value[1];

		console.log(key + ' is ' + _value);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = 'hello'[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var codePoint = _step2.value;

		console.log(codePoint);
	}

	// let s = 'Hello world!';

	// console.log(s.startsWith('Hello'));
	// console.log(s.endWith('!'));
	// console.log(s.includes('o'));
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

console.log('x'.repeat(3));
console.log('x'.padEnd(5, 'ab'));
alert(_templateObject);

function fetch(url, _ref4) {
	var _ref4$body = _ref4.body,
	    body = _ref4$body === undefined ? '' : _ref4$body,
	    _ref4$method = _ref4.method,
	    method = _ref4$method === undefined ? 'GET' : _ref4$method,
	    _ref4$headers = _ref4.headers,
	    headers = _ref4$headers === undefined ? {} : _ref4$headers;

	console.log(method);
}

fetch('http://example.com', {});

function foo() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

	console.log(x, y);
}

foo(undefined, null);

var arr01 = [1, 2];

var arr02 = [].concat(arr01);

arr02[0] = 'bbb';

console.log(arr01[0]);

console.log([].concat(_toConsumableArray('hello')));

console.log([1, 2, 3].includes(2));

[, 'a'].forEach(function (x, i) {
	return console.log(i);
});

console.log(['a',, 'b'].filter(function (x) {
	return true;
}));

function f(x, y) {
	return { x: x, y: y };
}

console.log(f(1, 2));

var o = {
	method: function method() {
		return 'Hello';
	}
};

var cart = {
	_wheels: 4,

	get wheels() {
		return this._wheels;
	},

	set wheels(value) {
		if (value < this._wheels) {
			throw new Error('数值太小了!');
		}
		this._wheels = value;
	}
};

var target = { a: 1, b: 1 };

var source1 = { b: 2, c: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2); //用于将两个不同的对象拼合在第一个参数上

//console.log(target, source1, source2);

var obj = {
	toString: function toString() {
		return 'abc';
	}
};

var sym = Symbol(obj);
console.log(sym);

// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');

// console.log(s1 === s2);

var s1 = Symbol.for('foo');
console.log(Symbol.keyFor(s1));

var MyClass = function () {
	function MyClass() {
		_classCallCheck(this, MyClass);
	}

	_createClass(MyClass, [{
		key: Symbol.hasInstance,
		value: function value(foo) {
			return foo instanceof Array;
		}
	}]);

	return MyClass;
}();

console.log([1, 2, 3] instanceof new MyClass());

/*--------------------------Set  和 Map 数据结构-----------------------------*/

var _set = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(function (x) {
	return _set.add(x);
});

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = _set[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _i3 = _step3.value;

		console.log(_i3);
	}
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}

var set = new Set([1, 2, 3, 4, 4]);
console.log([].concat(_toConsumableArray(set)));

console.log(set.size);

//去除数组重复成员的方法
function dedupe(array) {
	return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]);

var set1 = new Set(['bob', 'bill', 'kendy']);

console.log(set1);

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
	for (var _iterator4 = set1.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		var item = _step4.value;

		console.log(item);
	}
} catch (err) {
	_didIteratorError4 = true;
	_iteratorError4 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion4 && _iterator4.return) {
			_iterator4.return();
		}
	} finally {
		if (_didIteratorError4) {
			throw _iteratorError4;
		}
	}
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
	for (var _iterator5 = set1.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		var _item = _step5.value;

		console.log(_item);
	}
} catch (err) {
	_didIteratorError5 = true;
	_iteratorError5 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion5 && _iterator5.return) {
			_iterator5.return();
		}
	} finally {
		if (_didIteratorError5) {
			throw _iteratorError5;
		}
	}
}

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
	for (var _iterator6 = set1[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
		var _item2 = _step6.value;

		console.log(_item2);
	}
} catch (err) {
	_didIteratorError6 = true;
	_iteratorError6 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion6 && _iterator6.return) {
			_iterator6.return();
		}
	} finally {
		if (_didIteratorError6) {
			throw _iteratorError6;
		}
	}
}

var set2 = new Set([1, 2, 3]);
set2 = new Set(Array.from(set2, function (val) {
	return val * 2;
}));
console.log(set2);

var map01 = new Map();

map01.set(-0, 123);
map01.set(true, new Map());
console.log(map01);

//Map结构转换为对象
function strMapToObj(strMap) {
	var obj = Object.create(null);
	var _iteratorNormalCompletion7 = true;
	var _didIteratorError7 = false;
	var _iteratorError7 = undefined;

	try {
		for (var _iterator7 = strMap[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
			var _step7$value = _slicedToArray(_step7.value, 2),
			    k = _step7$value[0],
			    v = _step7$value[1];

			obj[k] = v;
		}
	} catch (err) {
		_didIteratorError7 = true;
		_iteratorError7 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion7 && _iterator7.return) {
				_iterator7.return();
			}
		} finally {
			if (_didIteratorError7) {
				throw _iteratorError7;
			}
		}
	}

	return obj;
}

var myMap = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap).yes);

var proxy = new Proxy({}, {
	get: function get(target, property) {
		return 35;
	}
});

console.log(proxy.time);

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
	var nextIndex = 0;
	return {
		next: function next() {
			return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
		}
	};
}

var RangeIterator = function () {
	function RangeIterator(start, stop) {
		_classCallCheck(this, RangeIterator);

		this.value = start;
		this.stop = stop;
	}

	_createClass(RangeIterator, [{
		key: Symbol.iterator,
		value: function value() {
			return this;
		}
	}, {
		key: 'next',
		value: function next() {
			var value = this.value;
			if (value < this.stop) {
				this.value++;
				return { done: false, value: value };
			}
			return { done: true, value: undefined };
		}
	}]);

	return RangeIterator;
}();

function range(start, stop) {
	return new RangeIterator(start, stop);
}

var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {
	for (var _iterator8 = range(0, 3)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
		var value = _step8.value;

		console.log(value);
	}
} catch (err) {
	_didIteratorError8 = true;
	_iteratorError8 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion8 && _iterator8.return) {
			_iterator8.return();
		}
	} finally {
		if (_didIteratorError8) {
			throw _iteratorError8;
		}
	}
}

var arr = ['red', 'green', 'blue'];

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
	for (var _iterator9 = arr[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
		var v = _step9.value;

		console.log(v);
	}
} catch (err) {
	_didIteratorError9 = true;
	_iteratorError9 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion9 && _iterator9.return) {
			_iterator9.return();
		}
	} finally {
		if (_didIteratorError9) {
			throw _iteratorError9;
		}
	}
}

var obj03 = {};
obj03[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
	for (var _iterator10 = obj03[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
		var _v = _step10.value;

		console.log(_v);
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
} catch (err) {
	_didIteratorError10 = true;
	_iteratorError10 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion10 && _iterator10.return) {
			_iterator10.return();
		}
	} finally {
		if (_didIteratorError10) {
			throw _iteratorError10;
		}
	}
}

var Point = function () {
	function Point(x, y) {
		_classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	}

	_createClass(Point, [{
		key: 'toString',
		value: function toString() {
			return '(' + this.x + ', ' + this.y + ')';
		}
	}, {
		key: 'isTarget',
		value: function isTarget() {
			console.log(new.target === Point);
		}
	}]);

	return Point;
}();

var point = new Point(2, 3);

point.isTarget();
console.log(point.toString());
console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__.hasOwnProperty('toString'));

var p1 = new Point(2, 3);
var p2 = new Point(3, 2);

p1.__proto__.printName = function () {
	return 'Oops';
};

p1.printName();
p2.printName();

var p3 = new Point(4, 2);
p3.printName();

console.log(Object.getPrototypeOf(p3));

var person = new (function () {
	function _class(name) {
		_classCallCheck(this, _class);

		this.name = name;
	}

	_createClass(_class, [{
		key: 'sayName',
		value: function sayName() {
			console.log(this.name);
		}
	}]);

	return _class;
}())('张三');

person.sayName();

function Person(name) {
	if (new.target !== undefined) {
		this.name = name;
	} else {
		throw new Error('必须使用 new 命令生成实例');
	}
}

var person01 = new Person('张三');

var Shape = function Shape() {
	_classCallCheck(this, Shape);

	if (new.target === Shape) {
		throw new Error('本类不能实例化');
	}
};

var Rectangle = function (_Shape) {
	_inherits(Rectangle, _Shape);

	function Rectangle(length, width) {
		_classCallCheck(this, Rectangle);

		return _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, x, y));
		//...
	}

	return Rectangle;
}(Shape);

//var x12138 = new Shape(); //无法实例化而报错


var y12138 = new Rectangle(3, 4);

var ColorPoint = function (_Point) {
	_inherits(ColorPoint, _Point);

	function ColorPoint(x, y, color) {
		_classCallCheck(this, ColorPoint);

		//调用父类的constructor(x, y)
		var _this2 = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

		_this2.color = color;
		return _this2;
	}

	_createClass(ColorPoint, [{
		key: 'toString',
		value: function toString() {
			return this.color + ' ' + _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this);
		}
	}]);

	return ColorPoint;
}(Point);

var cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint; //true

console.log(Object.getPrototypeOf(ColorPoint) === Point);

console.log(ColorPoint.__proto__ === Point);
