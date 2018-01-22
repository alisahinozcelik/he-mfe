function funcA(a: string);
function funcA(a: number);
function funcA(a: number, b: string);
function funcA(a: any, b?: string) {
	alert(a);
	alert(b);
}