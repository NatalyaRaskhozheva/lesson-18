function findAge() {
	const nowYear = parseFloat(document.getElementById('nowYear').value)
	const yearOfBirth = parseFloat(document.getElementById('birth').value)
	const result = nowYear - yearOfBirth
	document.getElementById('res').innerHTML = result
}
window.onload = function () {
	document.querySelector('#birth').onchange = findAge
}