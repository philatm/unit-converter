const mmToM = mm => 0.001 * mm;
const cmToM = cm => 0.01 * cm;
const mToMm = m => 1000 * m;
const mToCm = m => 100 * m;
const toM = {
	'mm': mmToM,
	'cm': cmToM,
	'm': (x) => x,
};
const fromM = {
	'mm': mToMm,
	'cm': mToCm,
	'm': (x) => x,
}