function getSum() {
	const priceTransport = parseFloat(document.getElementById('transport').value)
	console.log(priceTransport)
	const inputList = document.getElementsByTagName('input')
	let sumInp = 0
	for (const inp of inputList) {
		if (inp.checked) sumInp += parseFloat(inp.value)
	}
	console.log(sumInp)
	allSum = priceTransport + sumInp
	const container = document.getElementById('container')
	const div = document.createElement('div')
	div.innerText = `Sum - ${allSum}`
	container.append(div)
}
window.onload = function () {
	document.getElementsByTagName('button')[0].onclick = getSum
}