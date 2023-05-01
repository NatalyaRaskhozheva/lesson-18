function funcAdd() {
	const num1 = parseFloat(document.getElementById('first').value)
	const num2 = parseFloat(document.getElementById('second').value)
	const sum = num1 + num2
	document.getElementById('result').value = sum
}
function funcSubtraction() {
	const num1 = parseFloat(document.getElementById('first').value)
	const num2 = parseFloat(document.getElementById('second').value)
	const sub = num1 - num2
	document.getElementById('result').value = sub
}
function funcMult() {
	const num1 = parseFloat(document.getElementById('first').value)
	const num2 = parseFloat(document.getElementById('second').value)
	const mult = num1 * num2
	document.getElementById('result').value = mult
}
function funcDiv() {
	const num1 = parseFloat(document.getElementById('first').value)
	const num2 = parseFloat(document.getElementById('second').value)
	const div = num1 / num2
	document.getElementById('result').value = div
}