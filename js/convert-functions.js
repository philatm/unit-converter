const mmToM = mm => 0.001 * mm;
const cmToM = cm => 0.01 * cm;
const mileToM = mile => 1609.344 * mile;
const footToM = foot => 0.3048 * foot;

const mToMm = m => 1000 * m;
const mToCm = m => 100 * m;
const mToMile = m => m / 1609.344;
const mToFoot = m => m / 0.3048;

const toM = {
	'mm': mmToM,
	'cm': cmToM,
	'm': (x) => x,
	'mile': mileToM,
	'foot': footToM,
};
const fromM = {
	'mm': mToMm,
	'cm': mToCm,
	'm': (x) => x,
	'mile': mToMile,
	'foot': mToFoot,
}