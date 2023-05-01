function getWish() {
	arrayWish = ['Машина', 'Будинок', 'Квартира', 'Гроші', 'Кохання', 'Кросівки']
	for (let i = 0; i < 3; i++) {
		let randomNum = Math.floor(Math.random() * arrayWish.length)
		let d = document.createElement('div')
		d.innerText = arrayWish[randomNum]
		document.getElementById('container').append(d)
	}
}
window.onload = function () {
	getWish()
}