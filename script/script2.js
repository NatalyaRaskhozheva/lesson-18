function convert() {
	const euroCurs = 40.5
	const dollarCurs = 37.22

	const grnToEur = parseFloat(document.getElementById('grn').value) * euroCurs
	document.getElementById('eur').value = grnToEur

	const grnToDol = parseFloat(document.getElementById('grn').value) * dollarCurs
	document.getElementById('dol').value = grnToDol
}