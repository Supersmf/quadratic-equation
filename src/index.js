module.exports = function solveEquation(equation) {

    let arr = equation.replace(/\s/g, '').split(/\*x\^2|\*x/g);

	let a = parseInt(arr[0], 10);
	let b = parseInt(arr[1], 10);
	let c = parseInt(arr[2], 10);

	let discr = b*b - 4*a*c;

	let x1 = Math.round((-b + Math.sqrt(discr))/2/a);
	let x2 = Math.round((-b - Math.sqrt(discr))/2/a);

	return [x1, x2].sort((a, b) => a-b);
}
