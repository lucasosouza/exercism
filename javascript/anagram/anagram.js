function anagram(word) {
	var word = word;
	function charSort(word) {
		return word.toLowerCase().split('').sort().join('');
	}
	function toArray(args) {
		return Object.keys(args).map(function(k){return args[k]});
	}
	function compareWord(candidate) {
		return charSort(candidate) === charSort(word) && candidate.toLowerCase() !== word.toLowerCase(); 
	}
	return {
		matches: function(candidates){
			if (!(candidates instanceof Array)) candidates = toArray(arguments);
			return candidates.filter(compareWord);
		}	
	}
}

module.exports = anagram