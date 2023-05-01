function getTable() {
	const value = document.getElementById('price').value
	const container = document.getElementById('container')
	const tab = document.createElement('table')
	container.append(tab)
	for (let i = 0; i < value; i++) {
		const tr = document.createElement('tr')
		tab.prepend(tr)
		const td = document.createElement('td')
		tr.prepend(td)
		const inp = document.createElement('input')
		td.prepend(inp)
	}
	const button = document.createElement('button')
	button.innerText = 'Get sum'
	container.append(button)
	button.onclick = getSum
}
function getSum() {
	let sum = 0
	let middle = 0
	let inputList = document.getElementsByTagName('input')
	console.log(inputList)
	for (let i = 1; i < inputList.length; i++) {
		sum = sum + parseFloat(inputList[i].value)
	}
	middle = sum / (inputList.length - 1)
	const container = document.getElementById('container')
	const div = document.createElement('div')
	div.innerText = `Sum= ${middle}`
	container.append(div)

}
window.onload = function () {
	document.getElementsByTagName('button')[0].onclick = getTable
}