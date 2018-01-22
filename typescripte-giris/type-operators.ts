interface InterfaceA {
	a: string;
};

interface InterfaceB {
	b: string;
};

type type1 = InterfaceA | InterfaceB;
type type2 = InterfaceA & InterfaceB;

const test: type1 = {
	a: "str"
}

const test2: type1 = {
	b: "str"
}

const test3: type1 = {
	a: "str",
	b: "str"
}

const test4: type2 = {
	a: "str",
	b: "str"
}