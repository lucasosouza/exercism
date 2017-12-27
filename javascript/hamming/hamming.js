
var compute = function(a, b){
	var count = 0, i = 0;
	if (a.length !== b.length) throw new Error('DNA strands must be of equal length.')
	for (i;i<=a.length;i++) { if (a[i] !== b[i]) count++ }
	return count;
}

module.exports = compute;

