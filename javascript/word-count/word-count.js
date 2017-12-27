
var words = function(input){
	var wrds = input.replace(/\.$/,'').split(/,?\s+/), wrds_count = Object.create(null);
	wrds.forEach(function(word){ wrds_count[word] === undefined ? wrds_count[word] = 1 : ++wrds_count[word]; })
	return wrds_count
}

module.exports = words;