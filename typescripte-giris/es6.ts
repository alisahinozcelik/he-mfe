
// Class'lar
class Example {
	constructor() {
	}

	methodA() {}
}

// Destructuring
const object = {
	propA: 1,
	propB: "text"
};
const array = ["first", "second", "third", "fourth"];

const { propA, propB } = object;

propA === object.propA;
propB === object.propB;

const [first, second, ...rest] = array;

first === array[0];
first === second[0];

rest[0] === "third";
rest[1] === "fourth";

const [, , third, fourth] = array;

// Generators
function* exampleGenerator() {
	yield 0;
}

// String leterals
`
<div>
	<span class="${bold ? "bold" : ""}">text</span>
</div>
`