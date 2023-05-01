function createTable() {
	const container = document.getElementById('container')
	const tab = document.createElement('table')
	container.prepend(tab)
	for (let i = 0; i < 3; i++) {
		const tr = document.createElement('tr')
		tab.prepend(tr)
		for (let i = 0; i < 4; i++) {
			const randomNum = Math.floor(Math.random() * 10)
			const td = document.createElement('td')
			td.innerText = randomNum
			tr.prepend(td)
		}
	}
}

window.onload = function () {
	createTable()
}